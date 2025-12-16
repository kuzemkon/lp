import { useEffect, useState } from 'react';
import { Button } from '@tremor/react';

interface UploadReportModalProps {
  open: boolean;
  onClose: () => void;
}

const UploadReportModal = ({ open, onClose }: UploadReportModalProps) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  useEffect(() => {
    if (!open) {
      setSelectedFiles([]);
    }
  }, [open]);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    setSelectedFiles(Array.from(files));
  };

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg rounded-md bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-graphite-800">Upload fund report</h2>
          <button type="button" className="text-graphite-400 hover:text-graphite-600" onClick={onClose}>
            ✕
          </button>
        </div>
        <p className="mt-2 text-sm text-graphite-500">Select or drag a PDF filing to upload.</p>
        <div
          className="mt-6 rounded border-2 border-dashed border-graphite-200 bg-graphite-50 p-8 text-center"
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => {
            event.preventDefault();
            handleFiles(event.dataTransfer.files);
          }}
        >
          <p className="text-sm text-graphite-500">Drag & drop PDF files here</p>
          <p className="text-xs text-graphite-400">or</p>
          <label className="mt-3 inline-flex cursor-pointer items-center justify-center rounded bg-mint-100 px-4 py-2 text-sm font-semibold text-mint-700">
            Select files
            <input
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={(event) => handleFiles(event.target.files)}
            />
          </label>
        </div>
        {selectedFiles.length > 0 && (
          <div className="mt-4 rounded border border-graphite-100 bg-graphite-50 p-3 text-sm text-graphite-600">
            <p className="font-semibold text-graphite-800">Selected files</p>
            <ul className="mt-2 space-y-1">
              {selectedFiles.map((file) => (
                <li key={file.name}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-6 flex justify-end gap-3">
          <Button variant="secondary" color="slate" onClick={onClose}>
            Cancel
          </Button>
          <Button color="emerald" disabled={selectedFiles.length === 0}>
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadReportModal;
