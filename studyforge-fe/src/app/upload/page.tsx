'use client';

import { useState } from 'react';

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    } else {
      alert('Please select a PDF file');
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first');
      return;
    }

    // TODO: Replace with your actual API endpoint
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch('your-api-endpoint', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('File uploaded successfully!');
        setSelectedFile(null);
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      alert('Error uploading file');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
          Upload PDF
        </h1>
        
        <div className="space-y-4">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          {selectedFile && (
            <p className="text-sm text-gray-600">
              Selected: {selectedFile.name}
            </p>
          )}
          
          <button
            onClick={handleUpload}
            disabled={!selectedFile}
            className="w-full py-3 px-4 bg-blue-500 text-white font-medium rounded-lg
                     hover:bg-blue-600 transition-colors duration-200
                     disabled:bg-gray-300 disabled:cursor-not-allowed
                     sm:text-lg"
          >
            Upload PDF
          </button>
        </div>
      </div>
    </div>
  );
}