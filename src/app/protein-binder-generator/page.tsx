'use client';

import { useState, useEffect } from 'react';
import { useBinderDesign } from '@/hooks/useBinderDesign';

export default function ProteinBinderGenerator() {
  const [file, setFile] = useState<File | null>(null);
  const [targetName, setTargetName] = useState('');
  const [hotspotResidues, setHotspotResidues] = useState('A:50-65,A:120-135');
  const [numDesigns, setNumDesigns] = useState(10);
  const [dragActive, setDragActive] = useState(false);

  const {
    submit,
    isSubmitting,
    pipelineId,
    status,
    results,
    error,
    queueStatusText,
    refreshQueue,
    checkApi,
    download,
    stopPolling
  } = useBinderDesign();

  // Auto-refresh queue status
  useEffect(() => {
    refreshQueue();
    const interval = setInterval(refreshQueue, 30000); // Refresh every 30s
    return () => clearInterval(interval);
  }, [refreshQueue]);

  const handleFileChange = (selectedFile: File | null) => {
    setFile(selectedFile);
    if (selectedFile && !targetName) {
      // Auto-populate target name from filename
      const nameWithoutExt = selectedFile.name.replace(/\.(pdb|cif)$/i, '');
      setTargetName(nameWithoutExt);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    const droppedFile = files[0];
    
    if (droppedFile) {
      const fileName = droppedFile.name.toLowerCase();
      if (fileName.endsWith('.pdb') || fileName.endsWith('.cif')) {
        handleFileChange(droppedFile);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const validateForm = (): string[] => {
    const errors: string[] = [];
    
    if (!file) {
      errors.push('Target file is required');
    } else {
      const fileName = file.name.toLowerCase();
      if (!fileName.endsWith('.pdb') && !fileName.endsWith('.cif')) {
        errors.push('Target file must be a .pdb or .cif file');
      }
      if (file.size > 50 * 1024 * 1024) {
        errors.push('Target file must be smaller than 50MB');
      }
    }
    
    if (!targetName?.trim()) {
      errors.push('Target name is required');
    }
    
    if (!hotspotResidues?.trim()) {
      errors.push('Hotspot residues are required');
    } else {
      const hotspotRegex = /^[A-Z]:\d+-\d+(,[A-Z]:\d+-\d+)*$/;
      if (!hotspotRegex.test(hotspotResidues)) {
        errors.push('Hotspot residues must be in format "A:50-65" or "A:50-65,B:120-135"');
      }
    }
    
    if (!numDesigns || numDesigns < 1 || numDesigns > 50) {
      errors.push('Number of designs must be between 1 and 50');
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (errors.length > 0 || !file) return;

    try {
      await submit({
        file,
        targetName,
        hotspotResidues,
        numDesigns,
      });
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  const handleApiCheck = async () => {
    await checkApi();
  };

  const getProgressPercentage = () => {
    if (!status) return 0;
    if (status.progress_percentage !== undefined) return status.progress_percentage;
    
    // Estimate based on status
    switch (status.status) {
      case 'PENDING': return 5;
      case 'RUNNING': return 50;
      case 'COMPLETED': return 100;
      case 'FAILED': return 0;
      default: return 0;
    }
  };

  const getCurrentStage = () => {
    if (isSubmitting) return 'Uploading and starting pipeline...';
    if (!status) return 'Ready';
    
    switch (status.status) {
      case 'PENDING': return 'Pipeline queued...';
      case 'RUNNING': return status.jobs_by_stage ? 'Processing stages...' : 'Running design pipeline...';
      case 'COMPLETED': return 'Design completed!';
      case 'FAILED': return 'Design failed';
      case 'CANCELLED': return 'Design cancelled';
      default: return status.status;
    }
  };

  const validationErrors = validateForm();
  const isProcessing = isSubmitting || status?.status === 'RUNNING' || status?.status === 'PENDING';

  return (
    <main className="text-black min-h-screen w-full">
      <section className="px-4 sm:px-6 md:px-10 py-8 md:py-16">
        {/* Main Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-header text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-5xl xl:text-6xl leading-none mb-4 md:mb-8">
            Protein Binder Generator
          </h1>
          
          <p className="font-header text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed text-gray-700">
            Generate protein structures that bind to your target using RFDiffusion, ProteinMPNN, and AlphaFold 2.
          </p>
        </div>

        {/* API Status Check */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={handleApiCheck}
              className="font-header text-sm border border-gray-400 px-3 py-1 hover:border-black transition-colors"
            >
              Check API Health
            </button>
            
            <button
              onClick={refreshQueue}
              className="font-header text-sm border border-gray-400 px-3 py-1 hover:border-black transition-colors"
            >
              Refresh Queue Status
            </button>
          </div>
          
          {queueStatusText && (
            <div className="border-2 border-blue-500 bg-blue-50 p-3 mb-4">
              <div className="font-header text-blue-700 font-semibold mb-1">Queue Status</div>
              <div className="text-blue-700 text-sm">{queueStatusText}</div>
            </div>
          )}
        </div>

        {/* Global Error Display */}
        {error && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="border-2 border-red-500 bg-red-50 p-4">
              <div className="font-header text-red-700 font-semibold mb-1">Error</div>
              <div className="text-red-700 text-sm">{error}</div>
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto">
          {/* Show progress if we have an active pipeline */}
          {pipelineId && (
            <div className="mb-8 p-6 border-2 border-black bg-white">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-header text-2xl">Design Progress</h2>
                <div className={`px-3 py-1 border font-header text-sm font-semibold ${
                  status?.status === 'COMPLETED' 
                    ? 'bg-green-100 text-green-800 border-green-300'
                    : status?.status === 'FAILED'
                      ? 'bg-red-100 text-red-800 border-red-300'
                      : status?.status === 'RUNNING'
                        ? 'bg-yellow-100 text-yellow-800 border-yellow-300'
                        : 'bg-blue-100 text-blue-800 border-blue-300'
                }`}>
                  {status?.status || 'PENDING'}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <span className="font-semibold">Pipeline ID:</span>
                  <div className="font-mono text-xs text-gray-600 break-all">{pipelineId}</div>
                </div>
                <div>
                  <span className="font-semibold">Current Stage:</span>
                  <div>{getCurrentStage()}</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-header text-base font-semibold">Overall Progress</span>
                  <span className="font-header text-sm">{Math.round(getProgressPercentage())}%</span>
                </div>
                <div className="w-full bg-gray-200 border-2 border-gray-300 h-4">
                  <div 
                    className={`h-full transition-all duration-500 ${
                      status?.status === 'FAILED'
                        ? 'bg-red-500' 
                        : status?.status === 'COMPLETED'
                          ? 'bg-green-500' 
                          : 'bg-blue-500'
                    }`}
                    style={{ width: `${getProgressPercentage()}%` }}
                  />
                </div>
              </div>

              {/* Results Section */}
              {status?.status === 'COMPLETED' && results && (
                <div className="border-t border-gray-300 pt-4">
                  <h3 className="font-header text-lg font-semibold mb-3">Results</h3>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                    <div>
                      <span className="font-semibold">Total Designs:</span>
                      <div>{results.total}</div>
                    </div>
                    {results.summary_statistics && (
                      <>
                        <div>
                          <span className="font-semibold">Successful:</span>
                          <div>{(results.summary_statistics as any)?.successful_designs || 'N/A'}</div>
                        </div>
                        <div>
                          <span className="font-semibold">Best Score:</span>
                          <div>{((results.summary_statistics as any)?.best_score as number)?.toFixed(3) || 'N/A'}</div>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button
                      onClick={() => download('pdb')}
                      className="border-2 border-black px-4 py-3 font-header hover:bg-black hover:text-white transition-colors"
                    >
                      Download PDB
                    </button>
                    
                    <button
                      onClick={() => download('json')}
                      className="border-2 border-black px-4 py-3 font-header hover:bg-black hover:text-white transition-colors"
                    >
                      Download JSON
                    </button>

                    <button
                      onClick={() => download('csv')}
                      className="border-2 border-black px-4 py-3 font-header hover:bg-black hover:text-white transition-colors"
                    >
                      Download CSV
                    </button>

                    <button
                      onClick={() => download('fasta')}
                      className="border-2 border-black px-4 py-3 font-header hover:bg-black hover:text-white transition-colors"
                    >
                      Download FASTA
                    </button>
                  </div>
                </div>
              )}

              {/* Control Buttons */}
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => {
                    setFile(null);
                    setTargetName('');
                    setHotspotResidues('A:50-65,A:120-135');
                    setNumDesigns(10);
                    stopPolling();
                  }}
                  className="border-2 border-gray-400 px-4 py-2 font-header hover:border-black transition-colors"
                >
                  New Design
                </button>
                
                {isProcessing && (
                  <button
                    onClick={stopPolling}
                    className="border-2 border-red-500 px-4 py-2 font-header text-red-700 hover:bg-red-500 hover:text-white transition-colors"
                  >
                    Stop Polling
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Upload Form */}
          <div className="w-full max-w-2xl mx-auto p-6 border-2 border-black bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* File Upload */}
              <div>
                <label className="font-header text-lg block mb-2">
                  Target Protein File *
                </label>
                <div
                  className={`border-2 border-dashed p-8 text-center transition-colors ${
                    dragActive 
                      ? 'border-black bg-gray-50' 
                      : 'border-gray-400 hover:border-black'
                  }`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                >
                  <input
                    type="file"
                    accept=".pdb,.cif"
                    onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer font-header text-base"
                  >
                    {file ? (
                      <div>
                        <div className="text-black mb-2">Selected: {file.name}</div>
                        <div className="text-gray-600 text-sm">
                          Size: {(file.size / 1024 / 1024).toFixed(1)} MB
                        </div>
                        <div className="text-gray-600 text-sm mt-2">
                          Click to change or drag another file here
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="text-black mb-2">Upload PDB or CIF file</div>
                        <div className="text-gray-600 text-sm">
                          Click to browse or drag and drop (max 50MB)
                        </div>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {/* Target Name */}
              <div>
                <label className="font-header text-lg block mb-2">
                  Target Name *
                </label>
                <input
                  type="text"
                  value={targetName}
                  onChange={(e) => setTargetName(e.target.value)}
                  placeholder="e.g., EGFR_binder_design"
                  className="w-full border-2 border-black px-4 py-3 font-header text-base"
                  disabled={isSubmitting}
                />
              </div>

              {/* Hotspot Residues */}
              <div>
                <label className="font-header text-lg block mb-2">
                  Hotspot Residues *
                </label>
                <input
                  type="text"
                  value={hotspotResidues}
                  onChange={(e) => setHotspotResidues(e.target.value)}
                  placeholder="e.g., A:50-65,A:120-135"
                  className="w-full border-2 border-black px-4 py-3 font-header text-base"
                  disabled={isSubmitting}
                />
                <div className="text-gray-600 text-sm mt-1">
                  Format: Chain:StartResidue-EndResidue (e.g., A:50-65 or A:50-65,B:120-135)
                </div>
              </div>

              {/* Number of Designs */}
              <div>
                <label className="font-header text-lg block mb-2">
                  Number of Designs *
                </label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={numDesigns}
                  onChange={(e) => setNumDesigns(parseInt(e.target.value) || 1)}
                  className="w-full border-2 border-black px-4 py-3 font-header text-base"
                  disabled={isSubmitting}
                />
                <div className="text-gray-600 text-sm mt-1">
                  Between 1 and 50 designs (more designs = longer processing time)
                </div>
              </div>

              {/* Validation Errors */}
              {validationErrors.length > 0 && (
                <div className="border-2 border-red-500 bg-red-50 p-4">
                  <div className="font-header text-red-700 font-semibold mb-2">
                    Please fix the following errors:
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-red-700 text-sm">
                    {validationErrors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing || validationErrors.length > 0}
                className={`w-full font-header text-lg border-2 border-black px-8 py-4 transition-colors ${
                  isProcessing || validationErrors.length > 0
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'hover:bg-black hover:text-white'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                    {getCurrentStage()}
                  </div>
                ) : (
                  'Generate Protein Binder'
                )}
              </button>
            </form>

            {/* Info Box */}
            <div className="mt-8 border-2 border-gray-300 bg-gray-50 p-4">
              <div className="font-header text-base font-semibold mb-2">
                How it works:
              </div>
              <div className="text-sm space-y-1 text-gray-700">
                <p>1. Upload your target protein structure (.pdb or .cif file)</p>
                <p>2. Specify the hotspot residues you want to target</p>
                <p>3. Our system uses RFDiffusion, ProteinMPNN, and AlphaFold 2</p>
                <p>4. Processing typically takes 10-30 minutes</p>
                <p>5. Download the generated binder structures and analysis</p>
              </div>
            </div>
          </div>
        </div>

        {/* Environment Check Warning */}
        {typeof window !== 'undefined' && (
          !process.env.NEXT_PUBLIC_API_BASE_URL || !process.env.NEXT_PUBLIC_API_KEY
        ) && (
          <div className="max-w-2xl mx-auto mt-8">
            <div className="border-2 border-yellow-500 bg-yellow-50 p-4">
              <div className="font-header text-yellow-800 font-semibold mb-2">
                Configuration Required
              </div>
              <div className="text-yellow-800 text-sm">
                Please configure your API environment variables in .env.local to use this feature.
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}