import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Optimized: Only run on desktop
    if (window.matchMedia('(max-width: 1024px)').matches) return;

    let requestRef;
    let targetX = -100;
    let targetY = -100;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      
      // Check if hovering interactive element (optimized vs querying DOM every move)
      const target = e.target;
      const isInteractive = window.getComputedStyle(target).cursor === 'pointer' || 
                           target.tagName.toLowerCase() === 'a' ||
                           target.tagName.toLowerCase() === 'button';
      setIsHovering(isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Smooth interpolation loop
    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (targetX - prev.x) * 0.15, // LERP for butter-smooth catching up
        y: prev.y + (targetY - prev.y) * 0.15,
      }));
      requestRef = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    
    requestRef = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(requestRef);
    };
  }, []);

  // Don't render on mobile to save performance
  if (typeof window !== 'undefined' && window.innerWidth <= 1024) return null;

  return (
    <>
      {/* 
        Ultra-lightweight DOM.
        We use raw inline styles over Framer Motion for the ultimate 60fps locking. 
      */}
      <div 
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white pointer-events-none z-[10000] mix-blend-difference"
        style={{
          transform: `translate3d(${position.x - 8}px, ${position.y - 8}px, 0) scale(${isClicking ? 0.5 : isHovering ? 3 : 1})`,
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'transform'
        }}
      />
      <div 
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-white/20 pointer-events-none z-[9999]"
        style={{
          transform: `translate3d(${position.x - 24}px, ${position.y - 24}px, 0) scale(${isClicking ? 0.8 : isHovering ? 1.5 : 1})`,
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'transform'
        }}
      />
    </>
  );
}
