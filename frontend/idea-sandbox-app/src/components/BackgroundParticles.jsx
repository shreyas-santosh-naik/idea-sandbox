import React from "react";

export default function BackgroundParticles({ count = 50 }) {
  const particles = Array.from({ length: count }).map(() => {
    const size = Math.random() * 4 + 1;
    const left = Math.random() * 100;
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    return {
      width: `${size}px`,
      height: `${size}px`,
      left: `${left}%`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    };
  });

  return (
    <div className="background-particles">
      {particles.map((s, i) => (
        <div key={i} className="particle" style={s} />
      ))}
    </div>
  );
}
