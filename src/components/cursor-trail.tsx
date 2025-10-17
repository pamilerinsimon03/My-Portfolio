"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
}

export function CursorTrail() {
  const [trailPoints, setTrailPoints] = useState<TrailPoint[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const trailIdRef = useRef(0);

  const isInteractiveElement = useCallback((element: any): boolean => {
    try {
      if (!element || typeof element !== 'object') return false;
      if (!element.tagName && !element.nodeType) return false;
      
      const tagName = element.tagName?.toLowerCase();
      const className = element.className || '';
      
      if (tagName === 'button' || tagName === 'a') return true;
      
      try {
        const role = element.getAttribute?.('role');
        if (role === 'button') return true;
      } catch (e) {
        // Ignore getAttribute errors
      }
      
      if (typeof className === 'string' && className.includes('cursor-hover')) return true;
      
      return false;
    } catch (error) {
      return false;
    }
  }, []);

  useEffect(() => {
    // Only run on desktop
    if (window.innerWidth <= 768) return;

    let isActive = true;
    let lastTime = 0;
    const maxTrailLength = 20;
    const trailLifetime = 800; // ms

    const animate = (currentTime: number) => {
      if (!isActive) return;
      
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Update trail points
      setTrailPoints(prev => 
        prev
          .map(point => ({
            ...point,
            timestamp: point.timestamp - deltaTime
          }))
          .filter(point => point.timestamp > 0)
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Update cursor position immediately
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      const currentTime = performance.now();
      const distance = Math.sqrt(
        Math.pow(e.clientX - lastMousePos.current.x, 2) + 
        Math.pow(e.clientY - lastMousePos.current.y, 2)
      );

      // Only add trail points if mouse moved enough distance
      if (distance > 3) {
        setTrailPoints(prev => {
          const newPoint: TrailPoint = {
            x: e.clientX,
            y: e.clientY,
            timestamp: trailLifetime
          };
          
          return [newPoint, ...prev.slice(0, maxTrailLength - 1)];
        });
        
        lastMousePos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isInteractiveElement(target)) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isInteractiveElement(target)) {
        setIsHovering(false);
      }
    };

    // Initialize
    lastTime = performance.now();
    animationRef.current = requestAnimationFrame(animate);

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      isActive = false;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, [isInteractiveElement]);

  // Don't render on mobile
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      {/* Cursor outline circle */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full border-2 border-primary/60"
        style={{
          left: cursorPos.x - 8,
          top: cursorPos.y - 8,
          width: 16,
          height: 16,
          backgroundColor: 'transparent',
          boxShadow: `0 0 8px hsl(var(--primary) / 0.3)`,
          transition: 'none',
        }}
      />

      {/* Smooth trail */}
      {trailPoints.map((point, index) => {
        const opacity = point.timestamp / 800;
        const scale = 0.5 + (opacity * 0.5);
        const size = isHovering ? 8 : 4;
        
        return (
          <div
            key={`${point.x}-${point.y}-${index}`}
            className="fixed pointer-events-none z-[9998] rounded-full"
            style={{
              left: point.x - size / 2,
              top: point.y - size / 2,
              width: size,
              height: size,
              backgroundColor: isHovering ? 'hsl(var(--accent))' : 'hsl(var(--primary))',
              opacity: opacity * 0.6,
              transform: `scale(${scale})`,
              boxShadow: `0 0 ${size * 2}px ${isHovering ? 'hsl(var(--accent) / 0.5)' : 'hsl(var(--primary) / 0.5)'}`,
              transition: 'none',
            }}
          />
        );
      })}

      {/* Magnetic effect for interactive elements */}
      <style jsx>{`
        button, a, [role="button"], .cursor-hover {
          transition: transform 0.2s ease-out;
        }
        
        button:hover, a:hover, [role="button"]:hover, .cursor-hover:hover {
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
}
