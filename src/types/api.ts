export interface HealthResponse {
  status: string;
  timestamp?: number;
  environment?: string;
  version?: string;
}

export interface UploadResponse {
  status: 'submitted' | string;
  pipeline_id: string;
  upload: {
    bucket: string;
    s3_key: string;
    filename?: string;
    content_type?: string;
  };
  message?: string;
}

export interface QueueStatusResponse {
  aws_batch: {
    status: string;
    gpu_queue: { name: string; running_jobs: number; pending_jobs: number; total_capacity: string };
    cpu_queue: { name: string; running_jobs: number; pending_jobs: number; total_capacity: string };
  };
  timestamp: string;
}

export interface PipelineStatus {
  pipeline_id: string;
  name?: string;
  user_id?: string;
  status: string;
  progress_percentage?: number;
  created_at?: string;
  started_at?: string | null;
  completed_at?: string | null;
  jobs_by_stage?: Record<string, Array<Record<string, unknown>>>;
}

export interface PipelineResultsList {
  pipeline_id: string;
  results: Array<Record<string, unknown>>;
  total: number;
  limit: number;
  offset: number;
  has_more: boolean;
  summary_statistics?: Record<string, unknown>;
}

export type FileExportType = 'json' | 'csv' | 'pdb' | 'fasta' | 'pymol' | 'chimera';