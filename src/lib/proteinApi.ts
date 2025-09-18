import { apiFetch } from './api';
import type {
  HealthResponse,
  UploadResponse,
  QueueStatusResponse,
  PipelineStatus,
  PipelineResultsList,
  FileExportType,
} from '../types/api';

// Health
export async function health(): Promise<HealthResponse> {
  return apiFetch<HealthResponse>('/health');
}
export async function healthDetailed(): Promise<any> {
  return apiFetch('/api/v1/health/status');
}

// Upload + pipeline creation (multipart)
export async function uploadAndStartPipeline(args: {
  file: File;
  target_name: string;
  hotspot_residues: string;
  num_designs?: number;
}): Promise<UploadResponse> {
  const form = new FormData();
  form.append('file', args.file, args.file.name);
  form.append('target_name', args.target_name);
  form.append('hotspot_residues', args.hotspot_residues);
  form.append('num_designs', String(args.num_designs ?? 10));
  return apiFetch<UploadResponse>('/api/v1/files/upload', { method: 'POST', body: form });
}

// Queue + jobs (for visibility)
export async function getQueueStatus(): Promise<QueueStatusResponse> {
  return apiFetch('/api/v1/jobs/queue/status');
}
export async function listJobs(params?: { status?: string; limit?: number; offset?: number }): Promise<any> {
  const searchParams = new URLSearchParams();
  if (params?.status) searchParams.set('status', params.status);
  if (params?.limit) searchParams.set('limit', String(params.limit));
  if (params?.offset) searchParams.set('offset', String(params.offset));
  const qs = searchParams.toString();
  return apiFetch(`/api/v1/jobs/${qs ? `?${qs}` : ''}`);
}
export async function getJob(jobId: string): Promise<any> {
  return apiFetch(`/api/v1/jobs/${jobId}`);
}
export async function getJobResults(jobId: string): Promise<any> {
  return apiFetch(`/api/v1/jobs/${jobId}/results`);
}

// Pipelines (preferred; if available in deployment)
export async function getPipelineStatus(pipelineId: string): Promise<PipelineStatus> {
  return apiFetch<PipelineStatus>(`/api/v1/pipelines/${pipelineId}`);
}
export async function getPipelineResults(pipelineId: string, params?: { limit?: number; offset?: number }): Promise<PipelineResultsList> {
  const sp = new URLSearchParams();
  if (params?.limit) sp.set('limit', String(params.limit));
  if (params?.offset) sp.set('offset', String(params.offset));
  const qs = sp.toString();
  return apiFetch<PipelineResultsList>(`/api/v1/pipelines/${pipelineId}/results${qs ? `?${qs}` : ''}`);
}
export async function getResultsDownloadUrl(pipelineId: string, fileType: FileExportType): Promise<{ download_url: string; filename: string; file_size_mb?: number; expires_at?: string; }> {
  return apiFetch(`/api/v1/pipelines/${pipelineId}/results/download/${fileType}`);
}