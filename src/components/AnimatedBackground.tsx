import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  opacity: number;
  color: string;
  shape: 'circle' | 'triangle' | 'square';
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(80, Math.floor(window.innerWidth / 20));
      
      const colors = ['#3B82F6', '#1E40AF', '#60A5FA', '#93C5FD', '#DBEAFE'];
      const shapes: ('circle' | 'triangle' | 'square')[] = ['circle', 'triangle', 'square'];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          vz: (Math.random() - 0.5) * 2,
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 0.6 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          shape: shapes[Math.floor(Math.random() * shapes.length)]
        });
      }
      
      particlesRef.current = particles;
    };

    const drawShape = (ctx: CanvasRenderingContext2D, particle: Particle, x: number, y: number, size: number) => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 1;

      switch (particle.shape) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
          break;
        
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(x, y - size);
          ctx.lineTo(x - size * 0.866, y + size * 0.5);
          ctx.lineTo(x + size * 0.866, y + size * 0.5);
          ctx.closePath();
          ctx.fill();
          break;
        
        case 'square':
          ctx.fillRect(x - size, y - size, size * 2, size * 2);
          break;
      }
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background overlay
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(30, 64, 175, 0.1)');
      gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        // 3D perspective calculation
        const perspective = 800;
        const scale = perspective / (perspective + particle.z);
        const x2d = particle.x * scale + canvas.width / 2 * (1 - scale);
        const y2d = particle.y * scale + canvas.height / 2 * (1 - scale);
        const size = particle.size * scale;

        // Wrap around edges
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;
        if (particle.z < -500) particle.z = 500;
        if (particle.z > 500) particle.z = -500;

        // Update opacity based on z position
        particle.opacity = Math.max(0.1, Math.min(0.8, (500 - Math.abs(particle.z)) / 500));

        // Draw particle
        if (scale > 0.1) {
          drawShape(ctx, particle, x2d, y2d, size);
        }

        // Draw connections to nearby particles
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index >= otherIndex) return;
          
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const dz = particle.z - otherParticle.z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (distance < 150) {
            const otherScale = perspective / (perspective + otherParticle.z);
            const otherX2d = otherParticle.x * otherScale + canvas.width / 2 * (1 - otherScale);
            const otherY2d = otherParticle.y * otherScale + canvas.height / 2 * (1 - otherScale);
            
            ctx.save();
            ctx.globalAlpha = (1 - distance / 150) * 0.3 * Math.min(scale, otherScale);
            ctx.strokeStyle = '#60A5FA';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x2d, y2d);
            ctx.lineTo(otherX2d, otherY2d);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default AnimatedBackground;