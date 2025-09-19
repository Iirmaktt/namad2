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
  type: 'hexagon' | 'diamond' | 'grid' | 'molecule' | 'crystal';
  rotation: number;
  rotationSpeed: number;
  pulsePhase: number;
}

interface Connection {
  from: number;
  to: number;
  strength: number;
  type: 'structural' | 'molecular' | 'network';
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
      const particleCount = Math.min(40, Math.floor(window.innerWidth / 35));
      
      const colors = {
        hexagon: ['#1E40AF', '#3B82F6', '#60A5FA'],
        diamond: ['#1E3A8A', '#1E40AF', '#3B82F6'],
        grid: ['#1F2937', '#374151', '#4B5563'],
        molecule: ['#0F172A', '#1E293B', '#334155'],
        crystal: ['#0C4A6E', '#0369A1', '#0284C7']
      };

      const types: ('hexagon' | 'diamond' | 'grid' | 'molecule' | 'crystal')[] = 
        ['hexagon', 'diamond', 'grid', 'molecule', 'crystal'];

      for (let i = 0; i < particleCount; i++) {
        const type = types[Math.floor(Math.random() * types.length)];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 800 - 400,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          vz: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 8 + 6,
          opacity: Math.random() * 0.4 + 0.2,
          color: colors[type][Math.floor(Math.random() * colors[type].length)],
          type,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
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
          
          if (distance < 180 && Math.random() < 0.25) {
            let connectionType: 'structural' | 'molecular' | 'network' = 'structural';
            
            if (particles[i].type === 'molecule' || particles[j].type === 'molecule') {
              connectionType = 'molecular';
            } else if (particles[i].type === 'grid' || particles[j].type === 'grid') {
              connectionType = 'network';
            }
            
            connections.push({
              from: i,
              to: j,
              strength: 1 - distance / 180,
              type: connectionType
            });
          }
        }
      }
      
      connectionsRef.current = connections;
    };

    const drawHexagon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, color: string, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Outer hexagon
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const px = Math.cos(angle) * size;
        const py = Math.sin(angle) * size;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();
      
      // Inner structure
      ctx.strokeStyle = color + '60';
      ctx.lineWidth = 1;
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle) * size * 0.7, Math.sin(angle) * size * 0.7);
        ctx.stroke();
      }
      
      // Center dot
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.15, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    const drawDiamond = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, color: string, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Outer diamond
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.7, 0);
      ctx.lineTo(0, size);
      ctx.lineTo(-size * 0.7, 0);
      ctx.closePath();
      ctx.stroke();
      
      // Inner diamond
      ctx.strokeStyle = color + '80';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.5);
      ctx.lineTo(size * 0.35, 0);
      ctx.lineTo(0, size * 0.5);
      ctx.lineTo(-size * 0.35, 0);
      ctx.closePath();
      ctx.stroke();
      
      // Cross lines
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.5);
      ctx.lineTo(0, size * 0.5);
      ctx.moveTo(-size * 0.35, 0);
      ctx.lineTo(size * 0.35, 0);
      ctx.stroke();
      
      ctx.restore();
    };

    const drawGrid = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, color: string, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      
      // Grid pattern
      const gridSize = size / 3;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          ctx.strokeRect(i * gridSize - gridSize/2, j * gridSize - gridSize/2, gridSize, gridSize);
        }
      }
      
      // Corner dots
      ctx.fillStyle = color;
      for (let i = -1; i <= 1; i += 2) {
        for (let j = -1; j <= 1; j += 2) {
          ctx.beginPath();
          ctx.arc(i * size * 0.6, j * size * 0.6, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      ctx.restore();
    };

    const drawMolecule = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, color: string, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Central node
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.2, 0, Math.PI * 2);
      ctx.fill();
      
      // Surrounding nodes
      const nodeCount = 4;
      for (let i = 0; i < nodeCount; i++) {
        const angle = (i * Math.PI * 2) / nodeCount;
        const nodeX = Math.cos(angle) * size * 0.7;
        const nodeY = Math.sin(angle) * size * 0.7;
        
        // Connection line
        ctx.strokeStyle = color + '60';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(nodeX, nodeY);
        ctx.stroke();
        
        // Node
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(nodeX, nodeY, size * 0.12, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.restore();
    };

    const drawCrystal = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, color: string, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Crystal structure
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      
      // Outer structure
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.5, -size * 0.5);
      ctx.lineTo(size * 0.5, size * 0.5);
      ctx.lineTo(0, size);
      ctx.lineTo(-size * 0.5, size * 0.5);
      ctx.lineTo(-size * 0.5, -size * 0.5);
      ctx.closePath();
      ctx.stroke();
      
      // Inner lines
      ctx.strokeStyle = color + '70';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(0, size);
      ctx.moveTo(-size * 0.5, -size * 0.5);
      ctx.lineTo(size * 0.5, size * 0.5);
      ctx.moveTo(size * 0.5, -size * 0.5);
      ctx.lineTo(-size * 0.5, size * 0.5);
      ctx.stroke();
      
      ctx.restore();
    };

    const drawConnections = (ctx: CanvasRenderingContext2D) => {
      const particles = particlesRef.current;
      const connections = connectionsRef.current;
      
      connections.forEach(connection => {
        const p1 = particles[connection.from];
        const p2 = particles[connection.to];
        
        const perspective = 600;
        const scale1 = perspective / (perspective + p1.z);
        const scale2 = perspective / (perspective + p2.z);
        
        const x1 = p1.x * scale1 + canvas.width / 2 * (1 - scale1);
        const y1 = p1.y * scale1 + canvas.height / 2 * (1 - scale1);
        const x2 = p2.x * scale2 + canvas.width / 2 * (1 - scale2);
        const y2 = p2.y * scale2 + canvas.height / 2 * (1 - scale2);
        
        ctx.save();
        ctx.globalAlpha = connection.strength * 0.3 * Math.min(scale1, scale2);
        
        switch (connection.type) {
          case 'structural':
            ctx.strokeStyle = '#3B82F6';
            ctx.lineWidth = 1;
            break;
          case 'molecular':
            ctx.strokeStyle = '#1E40AF';
            ctx.lineWidth = 1.5;
            break;
          case 'network':
            ctx.strokeStyle = '#374151';
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 3]);
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
      
      // Professional gradient background pattern
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(30, 64, 175, 0.08)');
      gradient.addColorStop(0.25, 'rgba(59, 130, 246, 0.04)');
      gradient.addColorStop(0.5, 'rgba(15, 23, 42, 0.06)');
      gradient.addColorStop(0.75, 'rgba(30, 41, 59, 0.04)');
      gradient.addColorStop(1, 'rgba(12, 74, 110, 0.08)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add subtle geometric pattern overlay
      ctx.save();
      ctx.globalAlpha = 0.03;
      ctx.strokeStyle = '#3B82F6';
      ctx.lineWidth = 0.5;
      const patternSize = 60;
      for (let x = 0; x < canvas.width; x += patternSize) {
        for (let y = 0; y < canvas.height; y += patternSize) {
          if ((x / patternSize + y / patternSize) % 2 === 0) {
            ctx.strokeRect(x, y, patternSize, patternSize);
          }
        }
      }
      ctx.restore();

      // Draw connections first
      drawConnections(ctx);

      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;
        particle.rotation += particle.rotationSpeed;

        // 3D perspective calculation
        const perspective = 600;
        const scale = perspective / (perspective + particle.z);
        const x2d = particle.x * scale + canvas.width / 2 * (1 - scale);
        const y2d = particle.y * scale + canvas.height / 2 * (1 - scale);
        const size = particle.size * scale;

        // Wrap around edges
        if (particle.x < -100) particle.x = canvas.width + 100;
        if (particle.x > canvas.width + 100) particle.x = -100;
        if (particle.y < -100) particle.y = canvas.height + 100;
        if (particle.y > canvas.height + 100) particle.y = -100;
        if (particle.z < -400) particle.z = 400;
        if (particle.z > 400) particle.z = -400;

        // Update opacity based on z position
        const baseOpacity = Math.max(0.15, Math.min(0.6, (400 - Math.abs(particle.z)) / 400));
        particle.opacity = baseOpacity;

        // Draw particle based on type
        if (scale > 0.1) {
          switch (particle.type) {
            case 'hexagon':
              drawHexagon(ctx, x2d, y2d, size, particle.rotation, particle.color, particle.opacity);
              break;
            case 'diamond':
              drawDiamond(ctx, x2d, y2d, size, particle.rotation, particle.color, particle.opacity);
              break;
            case 'grid':
              drawGrid(ctx, x2d, y2d, size, particle.rotation, particle.color, particle.opacity);
              break;
            case 'molecule':
              drawMolecule(ctx, x2d, y2d, size, particle.rotation, particle.color, particle.opacity);
              break;
            case 'crystal':
              drawCrystal(ctx, x2d, y2d, size, particle.rotation, particle.color, particle.opacity);
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