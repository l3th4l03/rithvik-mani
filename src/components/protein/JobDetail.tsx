'use client';

import { useState, useEffect, useMemo } from 'react';
import { ProteinDesignService } from '@/lib/protein-service';
import type { 
  JobStatusResponse, 
  PipelineProgressResponse,
  JobResultsResponse,
  PipelineResultsResponse 
} from '@/lib/types';
import { ProgressTracker } from './ProgressTracker';

interface JobDetailProps {
  jobId: string;
  mode: 'quick' | 'pipeline';
  initialStatus: JobStatusResponse | PipelineProgressResponse;
  onBack: () => void;
}

export function JobDetail({ jobId, mode, initialStatus, onBack }: JobDetailProps) {
  const [status, setStatus] = useState(initialStatus);
  const [results, setResults] = useState<JobResultsResponse | PipelineResultsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pollingActive, setPollingActive] = useState(false);
  const [downloadingFile, setDownloadingFile] = useState<string | null>(null);

  const service = useMemo(() => new ProteinDesignService(), []);

  // Poll for updates if job is still running
  useEffect(() => {
    if (status.status === 'RUNNING' || status.status === 'SUBMITTED') {
      setPollingActive(true);
      
      const pollForUpdates = async () => {
        try {
          const finalStatus = await service.pollJobStatus(
            jobId,
            mode,
            (updatedStatus) => {
              setStatus(updatedStatus);
            }
          );
          
          setStatus(finalStatus);
          
          // Fetch results when complete
          if (finalStatus.status === 'COMPLETED') {
            const jobResults = await service.getJobResults(jobId, mode);
            setResults(jobResults);
          }
        } catch (err) {
          console.error('Polling failed:', err);
          setError(err instanceof Error ? err.message : 'Failed to update job status');
        } finally {
          setPollingActive(false);
        }
      };

      pollForUpdates();
    } else if (status.status === 'COMPLETED' && !results) {
      // Fetch results immediately if job is already complete
      service.getJobResults(jobId, mode)
        .then(setResults)
        .catch(err => {
          console.error('Failed to fetch results:', err);
          setError(err instanceof Error ? err.message : 'Failed to fetch results');
        });
    }
  }, [jobId, mode, service, status.status, results]);

  const handleDownload = async (fileType: string, fileName: string) => {
    setDownloadingFile(fileType);
    try {
      const blob = await service.downloadResultFile(jobId, mode, fileType);
      
      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download failed:', err);
      setError(`Failed to download ${fileName}: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setDownloadingFile(null);
    }
  };

  const renderQuickResults = (quickResults: JobResultsResponse) => {
    const { results: resultData } = quickResults;
    if (!resultData) return null;

    return (
      <div className="space-y-6">
        {/* Best Design Summary */}
        {resultData.best_design && (
          <div className="border-2 border-green-500 bg-green-50 p-4">
            <h3 className="font-header text-lg font-semibold text-green-800 mb-3">
              Best Design
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-semibold">Design ID:</span>
                <div className="font-mono text-xs">{resultData.best_design.design_id}</div>
              </div>
              <div>
                <span className="font-semibold">Score:</span>
                <div>{resultData.best_design.score.toFixed(3)}</div>
              </div>
              <div>
                <span className="font-semibold">Confidence:</span>
                <div>{(resultData.best_design.confidence * 100).toFixed(1)}%</div>
              </div>
              <div className="col-span-2">
                <span className="font-semibold">Description:</span>
                <div className="text-gray-700 mt-1">{resultData.best_design.description}</div>
              </div>
            </div>
          </div>
        )}

        {/* Downloads */}
        <div>
          <h3 className="font-header text-lg font-semibold mb-3">Download Results</h3>
          <div className="grid grid-cols-2 gap-4">
            {resultData.download_urls?.results_zip && (
              <button
                onClick={() => handleDownload('zip', `${jobId}_results.zip`)}
                disabled={downloadingFile === 'zip'}
                className="border-2 border-black px-4 py-3 font-header hover:bg-black hover:text-white transition-colors disabled:opacity-50"
              >
                {downloadingFile === 'zip' ? 'Downloading...' : 'Complete Results (ZIP)'}
              </button>
            )}
            
            {resultData.download_urls?.best_structure_pdb && (
              <button
                onClick={() => handleDownload('pdb', `${jobId}_best_structure.pdb`)}
                disabled={downloadingFile === 'pdb'}
                className="border-2 border-black px-4 py-3 font-header hover:bg-black hover:text-white transition-colors disabled:opacity-50"
              >
                {downloadingFile === 'pdb' ? 'Downloading...' : 'Best Structure (PDB)'}
              </button>
            )}
            
            {resultData.download_urls?.summary_json && (
              <button
                onClick={() => handleDownload('json', `${jobId}_summary.json`)}
                disabled={downloadingFile === 'json'}
                className="border-2 border-black px-4 py-3 font-header hover:bg-black hover:text-white transition-colors disabled:opacity-50"
              >
                {downloadingFile === 'json' ? 'Downloading...' : 'Analysis Summary (JSON)'}
              </button>
            )}
            
            {resultData.download_urls?.fasta && (
              <button
                onClick={() => handleDownload('fasta', `${jobId}_sequences.fasta`)}
                disabled={downloadingFile === 'fasta'}
                className="border-2 border-black px-4 py-3 font-header hover:bg-black hover:text-white transition-colors disabled:opacity-50"
              >
                {downloadingFile === 'fasta' ? 'Downloading...' : 'Sequences (FASTA)'}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderPipelineResults = (pipelineResults: PipelineResultsResponse) => {
    const { results: resultData } = pipelineResults;
    if (!resultData) return null;

    return (
      <div className="space-y-6">
        {/* Summary */}
        {resultData.summary && (
          <div className="border-2 border-blue-500 bg-blue-50 p-4">
            <h3 className="font-header text-lg font-semibold text-blue-800 mb-3">
              Results Summary
            </h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-semibold">Total Designs:</span>
                <div>{resultData.summary.total_designs}</div>
              </div>
              <div>
                <span className="font-semibold">Best Score:</span>
                <div>{resultData.summary.best_score.toFixed(3)}</div>
              </div>
              <div>
                <span className="font-semibold">Avg Confidence:</span>
                <div>{(resultData.summary.avg_confidence * 100).toFixed(1)}%</div>
              </div>
            </div>
          </div>
        )}

        {/* Top Designs */}
        {resultData.designs && resultData.designs.length > 0 && (
          <div>
            <h3 className="font-header text-lg font-semibold mb-3">
              Top Designs ({resultData.designs.length})
            </h3>
            <div className="space-y-2">
              {resultData.designs.slice(0, 5).map((design, index) => (
                <div key={design.design_id} className="border border-gray-300 p-3">
                  <div className="grid grid-cols-4 gap-4 items-center text-sm">
                    <div>
                      <span className="font-semibold">#{index + 1}</span>
                      <div className="font-mono text-xs text-gray-600">{design.design_id}</div>
                    </div>
                    <div>
                      <span className="font-semibold">Score:</span>
                      <div>{design.score.toFixed(3)}</div>
                    </div>
                    <div>
                      <span className="font-semibold">Confidence:</span>
                      <div>{(design.confidence * 100).toFixed(1)}%</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-600 truncate">{design.sequence.slice(0, 20)}...</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Downloads */}
        <div>
          <h3 className="font-header text-lg font-semibold mb-3">Download Results</h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleDownload('json', `${jobId}_results.json`)}
              disabled={downloadingFile === 'json'}
              className="border-2 border-black px-4 py-3 font-header hover:bg-black hover:text-white transition-colors disabled:opacity-50"
            >
              {downloadingFile === 'json' ? 'Downloading...' : 'Results Data (JSON)'}
            </button>
            
            <button
              onClick={() => handleDownload('csv', `${jobId}_results.csv`)}
              disabled={downloadingFile === 'csv'}
              className="border-2 border-black px-4 py-3 font-header hover:bg-black hover:text-white transition-colors disabled:opacity-50"
            >
              {downloadingFile === 'csv' ? 'Downloading...' : 'Results Table (CSV)'}
            </button>
            
            <button
              onClick={() => handleDownload('pdb', `${jobId}_structures.pdb`)}
              disabled={downloadingFile === 'pdb'}
              className="border-2 border-black px-4 py-3 font-header hover:bg-black hover:text-white transition-colors disabled:opacity-50"
            >
              {downloadingFile === 'pdb' ? 'Downloading...' : 'Structures (PDB)'}
            </button>
            
            <button
              onClick={() => handleDownload('fasta', `${jobId}_sequences.fasta`)}
              disabled={downloadingFile === 'fasta'}
              className="border-2 border-black px-4 py-3 font-header hover:bg-black hover:text-white transition-colors disabled:opacity-50"
            >
              {downloadingFile === 'fasta' ? 'Downloading...' : 'Sequences (FASTA)'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="font-header text-base border-2 border-gray-400 px-4 py-2 hover:border-black transition-colors"
      >
        ← Back to Upload
      </button>

      {/* Progress Tracker */}
      <ProgressTracker 
        jobId={jobId}
        mode={mode}
        status={status}
        onStatusUpdate={setStatus}
      />

      {/* Error Display */}
      {error && (
        <div className="border-2 border-red-500 bg-red-50 p-4">
          <div className="font-header text-red-700 font-semibold mb-2">Error:</div>
          <div className="text-red-700 text-sm">{error}</div>
          <button
            onClick={() => setError(null)}
            className="mt-2 text-red-600 underline text-sm"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Results Section */}
      {status.status === 'COMPLETED' && results && (
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="font-header text-2xl mb-6">Design Results</h2>
          
          {mode === 'quick' 
            ? renderQuickResults(results as JobResultsResponse)
            : renderPipelineResults(results as PipelineResultsResponse)
          }
        </div>
      )}

      {/* Failed State */}
      {status.status === 'FAILED' && (
        <div className="w-full max-w-2xl mx-auto border-2 border-red-500 bg-red-50 p-6">
          <h2 className="font-header text-xl text-red-800 mb-4">Design Job Failed</h2>
          <p className="text-red-700 mb-4">
            The protein binder design job encountered an error and could not complete.
          </p>
          <button
            onClick={onBack}
            className="font-header border-2 border-red-600 text-red-600 px-4 py-2 hover:bg-red-600 hover:text-white transition-colors"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Processing Status */}
      {pollingActive && (
        <div className="text-center text-gray-600">
          <div className="animate-pulse">
            Monitoring job progress... (updates every few seconds)
          </div>
        </div>
      )}
    </div>
  );
}