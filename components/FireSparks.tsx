import React from 'react';

const FireSparks: React.FC = () => {
  const numSparks = 50;
  const sparks = Array.from({ length: numSparks });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {sparks.map((_, i) => (
        <div
          key={i}
          className="spark"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 3}s`, // 3s to 6s duration
            animationDelay: `${Math.random() * 5}s`, // 0s to 5s delay
          }}
        />
      ))}
    </div>
  );
};

export default FireSparks;