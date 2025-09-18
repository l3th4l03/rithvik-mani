'use client';

import { useState, useEffect } from 'react';
import type { JobStatusResponse, PipelineProgressResponse } from '@/lib/types';

interface ProgressTrackerProps {
  jobId: string;
  mode: 'quick' | 'pipeline';
  status: JobStatusResponse | PipelineProgressResponse;
  onStatusUpdate: (status: JobStatusResponse | PipelineProgressResponse) => void;
}

export function ProgressTracker({ jobId, mode, status, onStatusUpdate }: ProgressTrackerProps) {
  const [localStatus, setLocalStatus] = useState(status);

  useEffect(() => {
    setLocalStatus(status);
    onStatusUpdate(status);
  }, [status, onStatusUpdate]);

  const getStatusColor = (statusValue: string) => {
    switch (statusValue) {
      case 'SUBMITTED':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'RUNNING':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'COMPLETED':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'FAILED':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getProgress = () => {
    if ('progress' in localStatus && typeof localStatus.progress === 'number') {
      return localStatus.progress;
    }
    
    // Estimate progress based on status for quick jobs
    switch (localStatus.status) {
      case 'SUBMITTED':
        return 10;
      case 'RUNNING':
        return 50;
      case 'COMPLETED':
        return 100;
      case 'FAILED':
        return 0;
      default:
        return 0;
    }
  };

  const getCurrentStage = () => {
    if ('current_stage' in localStatus) {
      return localStatus.current_stage;
    }
    
    switch (localStatus.status) {
      case 'SUBMITTED':
        return 'Job queued';
      case 'RUNNING':
        return mode === 'quick' ? 'Processing protein design' : 'Running pipeline';
      case 'COMPLETED':
        return 'Design completed';
      case 'FAILED':
        return 'Job failed';
      default:
        return 'Unknown';
    }
  };

  const getDetailedStages = () => {
    if (mode === 'pipeline' && 'stages' in localStatus && localStatus.stages) {
      return localStatus.stages;
    }
    return null;
  };

  const progress = getProgress();
  const currentStage = getCurrentStage();
  const detailedStages = getDetailedStages();
  const isComplete = localStatus.status === 'COMPLETED';
  const isFailed = localStatus.status === 'FAILED';

  return (
    <div className="w-full max-w-2xl mx-auto p-6 border-2 border-black bg-white">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="font-header text-2xl">
            Design Progress
          </h2>
          <div className={`px-3 py-1 border font-header text-sm font-semibold ${getStatusColor(localStatus.status)}`}>
            {localStatus.status}
          </div>
        </div>

        {/* Job Info */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-semibold">Job ID:</span>
            <div className="font-mono text-xs text-gray-600 break-all">{jobId}</div>
          </div>
          <div>
            <span className="font-semibold">Mode:</span>
            <div className="capitalize">{mode} path</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="font-header text-base font-semibold">Overall Progress</span>
            <span className="font-header text-sm">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 border-2 border-gray-300 h-4">
            <div 
              className={`h-full transition-all duration-500 ${
                isFailed 
                  ? 'bg-red-500' 
                  : isComplete 
                    ? 'bg-green-500' 
                    : 'bg-blue-500'
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Current Stage */}
        <div>
          <span className="font-header text-base font-semibold">Current Stage:</span>
          <div className="mt-1 text-gray-700">{currentStage}</div>
        </div>

        {/* Detailed Pipeline Stages */}
        {detailedStages && (
          <div>
            <span className="font-header text-base font-semibold mb-3 block">Pipeline Stages:</span>
            <div className="space-y-2">
              {detailedStages.map((stage, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 border border-gray-300"
                >
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      stage.status === 'completed' 
                        ? 'bg-green-500' 
                        : stage.status === 'running'
                          ? 'bg-blue-500'
                          : stage.status === 'failed'
                            ? 'bg-red-500'
                            : 'bg-gray-300'
                    }`} />
                    <span className="font-header text-sm">{stage.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-600">{Math.round(stage.progress)}%</span>
                    <div className="w-16 bg-gray-200 h-2">
                      <div 
                        className={`h-full ${
                          stage.status === 'failed'
                            ? 'bg-red-500'
                            : stage.status === 'completed'
                              ? 'bg-green-500'
                              : 'bg-blue-500'
                        }`}
                        style={{ width: `${stage.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Error Message */}
        {isFailed && 'error_message' in localStatus && localStatus.error_message && (
          <div className="border-2 border-red-500 bg-red-50 p-4">
            <div className="font-header text-red-700 font-semibold mb-2">
              Error Details:
            </div>
            <div className="text-red-700 text-sm">{localStatus.error_message}</div>
          </div>
        )}

        {/* Timestamps */}
        <div className="grid grid-cols-2 gap-4 text-xs text-gray-600 border-t border-gray-300 pt-4">
          {localStatus.created_at && (
            <div>
              <span className="font-semibold">Started:</span>
              <div>{new Date(localStatus.created_at).toLocaleString()}</div>
            </div>
          )}
          {localStatus.updated_at && (
            <div>
              <span className="font-semibold">Last Updated:</span>
              <div>{new Date(localStatus.updated_at).toLocaleString()}</div>
            </div>
          )}
        </div>

        {/* Live Status Indicator */}
        {!isComplete && !isFailed && (
          <div className="flex items-center justify-center text-sm text-gray-600">
            <div className="animate-pulse flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-ping"></div>
              Updating automatically...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}