import React, { useEffect, useState } from 'react';

const FullScreenConfetti: React.FC = () => {
  const [confettiPieces, setConfettiPieces] = useState<Array<{
    id: number;
    x: number;
    y: number;
    color: string;
    size: number;
    delay: number;
    duration: number;
    rotation: number;
  }>>([]);

  useEffect(() => {
    // Generate confetti pieces
    const pieces = [];
    for (let i = 0; i < 150; i++) {
      pieces.push({
        id: i,
        x: Math.random() * 100,
        y: -10 - Math.random() * 20,
        color: ['#fbbf24', '#f97316', '#ef4444', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 7)],
        size: 4 + Math.random() * 8,
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 4,
        rotation: Math.random() * 360
      });
    }
    setConfettiPieces(pieces);

    // Auto-remove after 8 seconds
    const timer = setTimeout(() => {
      setConfettiPieces([]);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (confettiPieces.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            backgroundColor: piece.color,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
            transform: `rotate(${piece.rotation}deg)`,
            animation: `
              confetti-fall ${piece.duration}s ${piece.delay}s infinite linear,
              confetti-spin ${piece.duration * 0.5}s ${piece.delay}s infinite linear
            `
          }}
        />
      ))}

      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        
        @keyframes confetti-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default FullScreenConfetti;