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
  type: 'atom' | 'molecule' | 'gear' | 'circuit' | 'nanoparticle';
  rotation: number;
  rotationSpeed: number;
  pulsePhase: number;
}

interface Connection {
  from: number;
  to: number;
  strength: number;
  type: 'molecular' | 'data' | 'energy';
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const animationRef = useRef<number>();
  const timeRef = useRef<number>(0);

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
      const particleCount = Math.min(60, Math.floor(window.innerWidth / 25));
      
      const colors = {
        atom: ['#3B82F6', '#1E40AF', '#60A5FA'],
        molecule: ['#10B981', '#059669', '#34D399'],
        gear: ['#F59E0B', '#D97706', '#FBBF24'],
        circuit: ['#8B5CF6', '#7C3AED', '#A78BFA'],
        nanoparticle: ['#EF4444', '#DC2626', '#F87171']
      };

      const types: ('atom' | 'molecule' | 'gear' | 'circuit' | 'nanoparticle')[] = 
        ['atom', 'molecule', 'gear', 'circuit', 'nanoparticle'];

      for (let i = 0; i < particleCount; i++) {
        const type = types[Math.floor(Math.random() * types.length)];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000 - 500,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          vz: (Math.random() - 0.5) * 1,
          size: Math.random() * 6 + 3,
          opacity: Math.random() * 0.7 + 0.3,
          color: colors[type][Math.floor(Math.random() * colors[type].length)],
          type,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
      
      particlesRef.current = particles;
      createConnections();
    };

    const createConnections = () => {
      const connections: Connection[] = [];
      const particles = particlesRef.current;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dz = particles[i].z - particles[j].z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (distance < 200 && Math.random() < 0.3) {
            let connectionType: 'molecular' | 'data' | 'energy' = 'molecular';
            
            if (particles[i].type === 'circuit' || particles[j].type === 'circuit') {
              connectionType = 'data';
            } else if (particles[i].type === 'nanoparticle' || particles[j].type === 'nanoparticle') {
              connectionType = 'energy';
            }
            
            connections.push({
              from: i,
              to: j,
              strength: 1 - distance / 200,
              type: connectionType
            });
          }
        }
      }
      
      connectionsRef.current = connections;
    };

    const drawAtom = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, color: string, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Nucleus
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.3, 0, Math.PI * 2);
      ctx.fill();
      
      // Electron orbits
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      for (let i = 0; i < 3; i++) {
        ctx.save();
        ctx.rotate((i * Math.PI * 2) / 3);
        ctx.beginPath();
        ctx.ellipse(0, 0, size, size * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
        
        // Electrons
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(size * Math.cos(timeRef.current * 0.01 + i), 0, size * 0.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      
      ctx.restore();
    };

    const drawMolecule = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, color: string, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Molecular bonds
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-size, 0);
      ctx.lineTo(size, 0);
      ctx.moveTo(0, -size);
      ctx.lineTo(0, size);
      ctx.stroke();
      
      // Atoms at bond ends
      ctx.fillStyle = color;
      const positions = [
        [-size, 0], [size, 0], [0, -size], [0, size]
      ];
      
      positions.forEach(([px, py]) => {
        ctx.beginPath();
        ctx.arc(px, py, size * 0.2, 0, Math.PI * 2);
        ctx.fill();
      });
      
      ctx.restore();
    };

    const drawGear = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, color: string, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      const teeth = 8;
      const innerRadius = size * 0.6;
      const outerRadius = size;
      
      ctx.fillStyle = color;
      ctx.beginPath();
      
      for (let i = 0; i < teeth * 2; i++) {
        const angle = (i * Math.PI) / teeth;
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;
        
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      
      ctx.closePath();
      ctx.fill();
      
      // Center hole
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
      
      ctx.restore();
    };

    const drawCircuit = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, color: string, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Circuit board base
      ctx.fillStyle = color;
      ctx.fillRect(-size, -size, size * 2, size * 2);
      
      // Circuit traces
      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-size, 0);
      ctx.lineTo(size, 0);
      ctx.moveTo(0, -size);
      ctx.lineTo(0, size);
      ctx.moveTo(-size * 0.5, -size * 0.5);
      ctx.lineTo(size * 0.5, size * 0.5);
      ctx.stroke();
      
      // Components
      ctx.fillStyle = '#FFD700';
      ctx.fillRect(-size * 0.2, -size * 0.2, size * 0.4, size * 0.4);
      
      ctx.restore();
    };

    const drawNanoparticle = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, pulsePhase: number, color: string, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      
      const pulseSize = size * (1 + Math.sin(timeRef.current * 0.05 + pulsePhase) * 0.3);
      
      // Outer glow
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, pulseSize * 2);
      gradient.addColorStop(0, color);
      gradient.addColorStop(0.5, color + '40');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, pulseSize * 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Core particle
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, pulseSize, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    const drawConnections = (ctx: CanvasRenderingContext2D) => {
      const particles = particlesRef.current;
      const connections = connectionsRef.current;
      
      connections.forEach(connection => {
        const p1 = particles[connection.from];
        const p2 = particles[connection.to];
        
        const perspective = 800;
        const scale1 = perspective / (perspective + p1.z);
        const scale2 = perspective / (perspective + p2.z);
        
        const x1 = p1.x * scale1 + canvas.width / 2 * (1 - scale1);
        const y1 = p1.y * scale1 + canvas.height / 2 * (1 - scale1);
        const x2 = p2.x * scale2 + canvas.width / 2 * (1 - scale2);
        const y2 = p2.y * scale2 + canvas.height / 2 * (1 - scale2);
        
        ctx.save();
        ctx.globalAlpha = connection.strength * 0.4 * Math.min(scale1, scale2);
        
        switch (connection.type) {
          case 'molecular':
            ctx.strokeStyle = '#10B981';
            ctx.lineWidth = 1;
            break;
          case 'data':
            ctx.strokeStyle = '#8B5CF6';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            break;
          case 'energy':
            ctx.strokeStyle = '#EF4444';
            ctx.lineWidth = 1.5;
            break;
        }
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();
      });
    };

    const animate = () => {
      timeRef.current += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Industrial gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(30, 64, 175, 0.1)');
      gradient.addColorStop(0.3, 'rgba(16, 185, 129, 0.05)');
      gradient.addColorStop(0.7, 'rgba(139, 92, 246, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections first
      drawConnections(ctx);

      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;
        particle.rotation += particle.rotationSpeed;

        // 3D perspective calculation
        const perspective = 800;
        const scale = perspective / (perspective + particle.z);
        const x2d = particle.x * scale + canvas.width / 2 * (1 - scale);
        const y2d = particle.y * scale + canvas.height / 2 * (1 - scale);
        const size = particle.size * scale;

        // Wrap around edges
        if (particle.x < -100) particle.x = canvas.width + 100;
        if (particle.x > canvas.width + 100) particle.x = -100;
        if (particle.y < -100) particle.y = canvas.height + 100;
        if (particle.y > canvas.height + 100) particle.y = -100;
        if (particle.z < -500) particle.z = 500;
        if (particle.z > 500) particle.z = -500;

        // Update opacity based on z position
        const baseOpacity = Math.max(0.2, Math.min(0.9, (500 - Math.abs(particle.z)) / 500));
        particle.opacity = baseOpacity;

        // Draw particle based on type
        if (scale > 0.1) {
          switch (particle.type) {
            case 'atom':
              drawAtom(ctx, x2d, y2d, size, particle.rotation, particle.color, particle.opacity);
              break;
            case 'molecule':
              drawMolecule(ctx, x2d, y2d, size, particle.rotation, particle.color, particle.opacity);
              break;
            case 'gear':
              drawGear(ctx, x2d, y2d, size, particle.rotation, particle.color, particle.opacity);
              break;
            case 'circuit':
              drawCircuit(ctx, x2d, y2d, size, particle.rotation, particle.color, particle.opacity);
              break;
            case 'nanoparticle':
              drawNanoparticle(ctx, x2d, y2d, size, particle.pulsePhase, particle.color, particle.opacity);
              break;
          }
        }
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