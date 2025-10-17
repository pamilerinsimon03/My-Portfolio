"use client";

import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";

export function ToasterWrapper() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <Toaster />;
}
