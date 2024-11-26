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
    <main className="text-white flex flex-col items-center w-full">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center animate-fade-in">Welcome to StudyForge</h1>
      
      <div className="my-8 animate-float">
        <svg 
          className="w-24 h-24 md:w-32 md:h-32" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {data && (
        <div className="text-center max-w-md mx-auto px-4">
          <p className="text-sm md:text-base text-white mt-4">
            Say hello to StudyForge, the ultimate tool for stress-free revision! Simply upload your child&apos;s textbook chapters, and let us craft personalized revision papers tailored for them. It&apos;s smart, simple, and the perfect study buddy for parents and kids alike.
          </p>
        </div>
      )}
    </main>
  );
}
