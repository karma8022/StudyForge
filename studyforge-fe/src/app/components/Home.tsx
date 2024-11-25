'use client';

import { useState, useEffect } from 'react';

interface ApiResponse {
  message: string;
  // Add other expected API response properties
}

export default function Home(): JSX.Element {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch('http://localhost:8000/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        console.error('Error fetching data:', errorMessage);
        setErrorMessage(errorMessage);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (hasError) {
    return (
      <div className="text-center text-red-500">
        <p className="text-white">Error loading data. Please try again later.</p>
        <p className="text-sm text-white">{errorMessage}</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-8 text-white">
      <h1 className="text-2xl font-bold mb-4">Welcome to StudyForge</h1>
      {data && (
        <div>
          <p className="text-white mt-">{data.message}</p>
          {/* Add more UI elements based on your API response */}
        </div>
      )}
    </main>
  );
}
