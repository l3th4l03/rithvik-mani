// Quick Path API Types
export interface QuickDesignRequest {
  target_file: File;
  target_name: string;
  hotspot_residues: string;
  binder_length_range: string;
  num_designs: number;
}

export interface QuickDesignResponse {
  job_id: string;
  status: string;
  target_uploaded: boolean;
}

export interface JobStatusResponse {
  job_id: string;
  status: 'SUBMITTED' | 'RUNNING' | 'COMPLETED' | 'FAILED';
  progress?: number;
  current_stage?: string;
  created_at?: string;
  updated_at?: string;
  error_message?: string;
}

export interface JobResultsResponse {
  job_id: string;
  status: string;
  results?: {
    best_design?: {
      design_id: string;
      score: number;
      confidence: number;
      description: string;
    };
    download_urls: {
      results_zip?: string;
      best_structure_pdb?: string;
      summary_json?: string;
      fasta?: string;
    };
  };
}

// Pipeline Path API Types
export interface PresignedUploadRequest {
  filename: string;
  content_type: string;
  user_id?: string;
  pipeline_id?: string | null;
  file_category: string;
  tags?: Record<string, unknown>;
  expires_hours: number;
}

export interface PresignedUploadResponse {
  upload_url: string;
  upload_fields: Record<string, string>;
  file_id: string;
  s3_key: string;
}

export interface PipelineCreateRequest {
  name: string;
  user_id?: string;
  description?: string;
  target_pdb_path: string;
  hotspot_residues: string;
  num_designs: number;
  num_sequences_per_design?: number;
  num_structure_models?: number;
  parallel_execution?: boolean;
  priority?: number;
  timeout_hours?: number;
}

export interface PipelineCreateResponse {
  pipeline_id: string;
  name: string;
  status: string;
  created_at: string;
}

export interface PipelineProgressResponse {
  pipeline_id: string;
  status: 'SUBMITTED' | 'RUNNING' | 'COMPLETED' | 'FAILED';
  progress: number;
  current_stage?: string;
  stages?: {
    name: string;
    status: string;
    progress: number;
  }[];
  created_at: string;
  updated_at: string;
  error_message?: string;
}

export interface PipelineResultsResponse {
  pipeline_id: string;
  status: string;
  results?: {
    designs: Array<{
      design_id: string;
      score: number;
      confidence: number;
      structure_path: string;
      sequence: string;
    }>;
    summary: {
      total_designs: number;
      best_score: number;
      avg_confidence: number;
    };
  };
}

// SSE Event Types
export interface SSEAnalysisEvent {
  type: 'progress' | 'stage_complete' | 'error' | 'completion';
  job_id: string;
  timestamp: string;
  data: {
    progress?: number;
    stage?: string;
    message?: string;
    error?: string;
    results?: JobResultsResponse['results'];
  };
}

// Error Types
export interface ApiError extends Error {
  status: number;
  url: string;
  response?: string;
}

// Rate Limiting
export interface RateLimitInfo {
  limit: number;
  remaining: number;
  resetAt: Date;
}