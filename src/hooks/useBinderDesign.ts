'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  uploadAndStartPipeline,
  getPipelineStatus,
  getJobResults,
  getQueueStatus,
  health,
} from '../lib/proteinApi';
import type { PipelineStatus, PipelineResultsList } from '../types/api';

type SubmitArgs = {
  file: File;
  targetName: string;
  hotspotResidues: string;
  numDesigns: number;
};

type State = {
  isSubmitting: boolean;
  pipelineId: string | null;
  status: PipelineStatus | null;
  results: PipelineResultsList | null;
  error: string | null;
  queue: string | null;
};

export function useBinderDesign() {
  const [state, setState] = useState<State>({
    isSubmitting: false,
    pipelineId: null,
    status: null,
    results: null,
    error: null,
    queue: null,
  });

  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const validateFile = (file: File) => {
    const lower = file.name.toLowerCase();
    if (!lower.endsWith('.pdb') && !lower.endsWith('.cif')) {
      throw new Error('Please upload a .pdb or .cif file.');
    }
    if (file.size > 50 * 1024 * 1024) {
      throw new Error('File must be <= 50MB.');
    }
  };

  const submit = useCallback(async (args: SubmitArgs) => {
    try {
      validateFile(args.file);
      setState(s => ({ ...s, isSubmitting: true, error: null, pipelineId: null, status: null, results: null }));

      const upload = await uploadAndStartPipeline({
        file: args.file,
        target_name: args.targetName,
        hotspot_residues: args.hotspotResidues,
        num_designs: args.numDesigns,
      });

      setState(s => ({ ...s, pipelineId: upload.pipeline_id }));

      // Start polling job status every 12s
      if (pollRef.current) clearInterval(pollRef.current);
      pollRef.current = setInterval(async () => {
        try {
          const job = await getPipelineStatus(upload.pipeline_id);
          // Convert job structure to pipeline-like structure for compatibility
          const st = {
            pipeline_id: upload.pipeline_id,
            status: job.status,
            created_at: job.created_at,
            updated_at: job.updated_at,
            progress_percentage: job.progress_percentage,
            jobs_by_stage: job.jobs_by_stage || null
          };
          setState(s => ({ ...s, status: st }));
          if (st.status === 'COMPLETED' || st.status === 'FAILED' || st.status === 'CANCELLED') {
            if (pollRef.current) clearInterval(pollRef.current);
            // Try to fetch results if completed
            if (st.status === 'COMPLETED') {
              try {
                const res = await getJobResults(upload.pipeline_id);
                setState(s => ({ ...s, results: res }));
              } catch {
                /* results may not be immediately available */
              }
            }
          }
        } catch (e: any) {
          // Stop polling on persistent errors
          if (pollRef.current) clearInterval(pollRef.current);
          setState(s => ({ ...s, error: e?.message || 'Status check failed' }));
        }
      }, 12000);

      setState(s => ({ ...s, isSubmitting: false }));
      return upload.pipeline_id;
    } catch (e: any) {
      setState(s => ({ ...s, isSubmitting: false, error: e?.message || 'Submission failed' }));
      throw e;
    }
  }, []);

  const stopPolling = useCallback(() => {
    if (pollRef.current) clearInterval(pollRef.current);
  }, []);

  useEffect(() => {
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, []);

  const download = useCallback(async (fileType: 'json'|'csv'|'pdb'|'fasta'|'pymol'|'chimera') => {
    if (!state.pipelineId) throw new Error('No pipeline id');
    // For now, just show the job results in a new tab since download endpoints may not be implemented
    const results = await getJobResults(state.pipelineId);
    const blob = new Blob([JSON.stringify(results, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `results_${state.pipelineId}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [state.pipelineId]);

  const queueStatusText = useMemo(() => state.queue, [state.queue]);

  const refreshQueue = useCallback(async () => {
    try {
      const q = await getQueueStatus();
      const txt = `GPU running: ${q.aws_batch.gpu_queue.running_jobs}, pending: ${q.aws_batch.gpu_queue.pending_jobs} | CPU running: ${q.aws_batch.cpu_queue.running_jobs}, pending: ${q.aws_batch.cpu_queue.pending_jobs}`;
      setState(s => ({ ...s, queue: txt }));
    } catch {
      setState(s => ({ ...s, queue: null }));
    }
  }, []);

  const checkApi = useCallback(async () => {
    try {
      const h = await health();
      return h?.status === 'healthy';
    } catch {
      return false;
    }
  }, []);

  return {
    ...state,
    submit,
    stopPolling,
    refreshQueue,
    checkApi,
    download,
    queueStatusText,
  };
}