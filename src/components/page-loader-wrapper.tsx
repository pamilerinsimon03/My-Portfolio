"use client";

import { useState, useEffect } from "react";
import { PageLoader } from "./page-loader";

interface PageLoaderWrapperProps {
  children: React.ReactNode;
}

export function PageLoaderWrapper({ children }: PageLoaderWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if this is the first visit
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      // Skip loader for returning visitors
      setIsLoading(false);
    } else {
      // Show loader for first-time visitors
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  // Don't render anything until mounted to prevent hydration issues
  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <>
      {isLoading && <PageLoader onComplete={handleLoaderComplete} />}
      {children}
    </>
  );
}
