import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface MorphingBlobProps {
  isDark: boolean;
}

export function MorphingBlob({ isDark }: MorphingBlobProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const path = svg.querySelector('path');
    if (!path) return;

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.02;
      
      const points = [
        [50 + Math.sin(time) * 20, 50 + Math.cos(time * 1.2) * 15],
        [150 + Math.sin(time * 1.3) * 25, 40 + Math.cos(time * 0.8) * 20],
        [200 + Math.sin(time * 0.9) * 15, 100 + Math.cos(time * 1.1) * 25],
        [170 + Math.sin(time * 1.4) * 20, 180 + Math.cos(time * 0.7) * 15],
        [80 + Math.sin(time * 0.6) * 25, 190 + Math.cos(time * 1.5) * 20],
        [30 + Math.sin(time * 1.1) * 15, 120 + Math.cos(time * 0.9) * 25]
      ];

      const d = `M ${points[0][0]} ${points[0][1]} ` +
        points.slice(1).map((point, i) => {
          const cp1 = points[i];
          const cp2 = point;
          return `Q ${cp1[0]} ${cp1[1]} ${cp2[0]} ${cp2[1]}`;
        }).join(' ') + ' Z';

      path.setAttribute('d', d);
      
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden opacity-20"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.2 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 250 250"
        style={{ filter: 'blur(1px)' }}
      >
        <defs>
          <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDark ? "#3B82F6" : "#8B5CF6"} />
            <stop offset="50%" stopColor={isDark ? "#8B5CF6" : "#EC4899"} />
            <stop offset="100%" stopColor={isDark ? "#EC4899" : "#F59E0B"} />
          </linearGradient>
        </defs>
        <path
          fill="url(#blobGradient)"
          d="M 50 50 Q 150 40 200 100 Q 170 180 80 190 Q 30 120 50 50 Z"
        />
      </svg>
    </motion.div>
  );
}