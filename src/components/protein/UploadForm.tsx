'use client';

import { useState, useMemo } from 'react';
import { ProteinDesignService, type DesignJobRequest } from '@/lib/protein-service';

interface UploadFormProps {
  onJobSubmitted: (jobId: string, mode: 'quick' | 'pipeline') => void;
  onError: (error: string) => void;
}

export function UploadForm({ onJobSubmitted, onError }: UploadFormProps) {
  const [formData, setFormData] = useState<Partial<DesignJobRequest>>({
    targetName: '',
    hotspotResidues: '',
    binderLengthRange: '50-150',
    numDesigns: 10,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const service = useMemo(() => new ProteinDesignService(), []);

  const handleFileChange = (file: File | null) => {
    setFormData(prev => ({ ...prev, targetFile: file || undefined }));
    if (file) {
      // Auto-populate target name from filename if empty
      if (!formData.targetName) {
        const nameWithoutExt = file.name.replace(/\.(pdb|cif)$/i, '');
        setFormData(prev => ({ ...prev, targetName: nameWithoutExt }));
      }
    }
  };

  const handleInputChange = (field: keyof DesignJobRequest, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear validation errors when user starts typing
    if (validationErrors.length > 0) {
      setValidationErrors([]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    const file = files[0];
    
    if (file) {
      const fileName = file.name.toLowerCase();
      if (fileName.endsWith('.pdb') || fileName.endsWith('.cif')) {
        handleFileChange(file);
      } else {
        onError('Please upload a .pdb or .cif file');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const errors = ProteinDesignService.validateDesignRequest(formData);
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setValidationErrors([]);

    try {
      const result = await service.submitDesignJob(formData as DesignJobRequest);
      onJobSubmitted(result.jobId, result.mode);
    } catch (error) {
      console.error('Job submission failed:', error);
      onError(error instanceof Error ? error.message : 'Failed to submit design job');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
              {formData.targetFile ? (
                <div>
                  <div className="text-black mb-2">Selected: {formData.targetFile.name}</div>
                  <div className="text-gray-600 text-sm">
                    Size: {(formData.targetFile.size / 1024 / 1024).toFixed(1)} MB
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
            value={formData.targetName || ''}
            onChange={(e) => handleInputChange('targetName', e.target.value)}
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
            value={formData.hotspotResidues || ''}
            onChange={(e) => handleInputChange('hotspotResidues', e.target.value)}
            placeholder="e.g., A:50-65,A:120-135"
            className="w-full border-2 border-black px-4 py-3 font-header text-base"
            disabled={isSubmitting}
          />
          <div className="text-gray-600 text-sm mt-1">
            Format: Chain:StartResidue-EndResidue (e.g., A:50-65 or A:50-65,B:120-135)
          </div>
        </div>

        {/* Binder Length Range */}
        <div>
          <label className="font-header text-lg block mb-2">
            Binder Length Range *
          </label>
          <input
            type="text"
            value={formData.binderLengthRange || ''}
            onChange={(e) => handleInputChange('binderLengthRange', e.target.value)}
            placeholder="e.g., 50-150"
            className="w-full border-2 border-black px-4 py-3 font-header text-base"
            disabled={isSubmitting}
          />
          <div className="text-gray-600 text-sm mt-1">
            Format: MinLength-MaxLength (e.g., 50-150)
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
            value={formData.numDesigns || ''}
            onChange={(e) => handleInputChange('numDesigns', parseInt(e.target.value))}
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
          disabled={isSubmitting}
          className={`w-full font-header text-lg border-2 border-black px-8 py-4 transition-colors ${
            isSubmitting
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'hover:bg-black hover:text-white'
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
              Submitting Design Job...
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
  );
}