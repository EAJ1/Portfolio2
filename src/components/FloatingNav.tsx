import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Home, User, Code, Briefcase, GraduationCap, Mail, FolderKanban, Cpu } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface FloatingNavProps {
  isDark: boolean;
}

export function FloatingNav({ isDark }: FloatingNavProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const navItems = [
    { id: 'hero', icon: Home, label: 'Home', color: '#EC4899' },
    { id: 'about', icon: User, label: 'About', color: '#8B5CF6' },
    { id: 'skills', icon: Code, label: 'Skills', color: '#3B82F6' },
    { id: 'projects', icon: FolderKanban, label: 'Projects', color: '#10B981' },
    { id: 'technologies', icon: Cpu, label: 'Technologies', color: '#F59E0B' },
    { id: 'experience', icon: Briefcase, label: 'Experience', color: '#EF4444' },
    { id: 'education', icon: GraduationCap, label: 'Education', color: '#06B6D4' },
    { id: 'contact', icon: Mail, label: 'Contact', color: '#A855F7' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Update scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollY / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
      
      // Find active section
      let currentSection = 'hero';
      let minDistance = Infinity;
      
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - 100);
          
          if (rect.top <= window.innerHeight && rect.bottom >= 0 && distance < minDistance) {
            minDistance = distance;
            currentSection = item.id;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    
    setActiveSection(sectionId);
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  };

  return (
    <motion.div
      className="fixed left-4 lg:left-6 top-1/2 -translate-y-1/2"
      style={{ zIndex: 99999 }}
      initial={{ opacity: 0, x: -100, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: 0.3,
        type: "spring",
        stiffness: 100
      }}
    >
      <motion.div
        className="relative flex flex-col gap-1.5 p-2 rounded-3xl backdrop-blur-xl border-2 shadow-2xl overflow-visible"
        style={{
          background: isDark 
            ? 'linear-gradient(135deg, rgba(30, 30, 50, 0.95), rgba(20, 20, 40, 0.95))'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(250, 250, 255, 0.95))',
          borderColor: isDark ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.2)',
          boxShadow: isDark 
            ? '0 20px 60px rgba(139, 92, 246, 0.4), 0 0 100px rgba(59, 130, 246, 0.2)'
            : '0 20px 60px rgba(139, 92, 246, 0.3), 0 0 80px rgba(59, 130, 246, 0.15)'
        }}
        whileHover={{
          boxShadow: isDark
            ? '0 25px 70px rgba(139, 92, 246, 0.5), 0 0 120px rgba(59, 130, 246, 0.3)'
            : '0 25px 70px rgba(139, 92, 246, 0.4), 0 0 100px rgba(59, 130, 246, 0.2)'
        }}
      >
        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-50"
          style={{
            background: isDark
              ? 'linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))'
              : 'linear-gradient(45deg, rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.05))',
            filter: 'blur(20px)'
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          const isHovered = hoveredButton === item.id;
          
          return (
            <NavButton
              key={item.id}
              item={item}
              Icon={Icon}
              isActive={isActive}
              isHovered={isHovered}
              isDark={isDark}
              index={index}
              onClick={() => handleNavClick(item.id)}
              onHoverStart={() => setHoveredButton(item.id)}
              onHoverEnd={() => setHoveredButton(null)}
            />
          );
        })}
      </motion.div>

      {/* Enhanced Progress indicator */}
      <motion.div
        className="mt-3 w-1.5 h-24 rounded-full mx-auto overflow-hidden relative"
        style={{
          background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.2)'
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          className="w-full rounded-full relative overflow-hidden"
          style={{
            height: `${scrollProgress}%`,
            background: 'linear-gradient(to bottom, #EC4899, #8B5CF6, #3B82F6)',
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)'
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent)'
            }}
            animate={{
              y: ['-100%', '200%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

interface NavButtonProps {
  item: { id: string; icon: any; label: string; color: string };
  Icon: any;
  isActive: boolean;
  isHovered: boolean;
  isDark: boolean;
  index: number;
  onClick: () => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

function NavButton({ item, Icon, isActive, isHovered, isDark, index, onClick, onHoverStart, onHoverEnd }: NavButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  
  // Magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = (e.clientX - centerX) * 0.3;
    const distanceY = (e.clientY - centerY) * 0.3;
    
    mouseX.set(distanceX);
    mouseY.set(distanceY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick();
    
    // Create particle explosion effect
    const rect = e.currentTarget.getBoundingClientRect();
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50
    }));
    
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 1000);
  };

  return (
    <motion.button
      ref={buttonRef}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="relative p-2 rounded-xl transition-all duration-300 group overflow-visible"
      aria-label={`Navigate to ${item.label}`}
      title={item.label}
      type="button"
      style={{
        x,
        y,
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        background: 'transparent'
      }}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: 0.5 + index * 0.08,
        type: "spring",
        stiffness: 200
      }}
      whileHover={{ 
        scale: 1.2,
        rotate: [0, -10, 10, -10, 0],
        transition: { 
          scale: { duration: 0.2 },
          rotate: { duration: 0.5 }
        }
      }}
      whileTap={{ 
        scale: 0.85,
        transition: { duration: 0.1 }
      }}
    >
      {/* Particle explosion effects */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: item.color,
            left: '50%',
            top: '50%',
            boxShadow: `0 0 10px ${item.color}`
          }}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{ 
            x: particle.x, 
            y: particle.y, 
            opacity: 0, 
            scale: 0 
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      ))}

      {/* Rotating ring background for active state */}
      {isActive && (
        <>
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
              opacity: 0.9
            }}
            layoutId="activeBackground"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
          
          {/* Rotating gradient ring */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `conic-gradient(from 0deg, transparent, ${item.color}, transparent)`,
              opacity: 0.5
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Pulsing glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl blur-xl"
            style={{
              background: item.color,
              opacity: 0.4
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </>
      )}

      {/* Hover glow effect */}
      {isHovered && !isActive && (
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(circle, ${item.color}40, transparent)`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.2 }}
          exit={{ opacity: 0, scale: 0.8 }}
        />
      )}

      {/* Shimmer effect overlay */}
      <motion.div
        className="absolute inset-0 rounded-2xl overflow-hidden"
        style={{
          background: `linear-gradient(90deg, transparent, ${item.color}30, transparent)`
        }}
        animate={{
          x: ['-100%', '200%']
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: index * 0.3,
          ease: "easeInOut"
        }}
      />

      {/* Icon with breathing animation */}
      <motion.div 
        className="relative z-10"
        animate={isActive ? {
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Icon 
          className={`w-5 h-5 transition-all duration-300 ${
            isActive 
              ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' 
              : isDark 
                ? 'text-gray-400 group-hover:text-white' 
                : 'text-gray-600 group-hover:text-gray-900'
          }`}
          style={{
            filter: isActive ? `drop-shadow(0 0 10px ${item.color})` : 'none',
            pointerEvents: 'none'
          }}
        />
      </motion.div>

      {/* Enhanced 3D tooltip */}
      <motion.div
        className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-[100000]"
        style={{
          background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
          border: '2px solid rgba(255, 255, 255, 0.3)',
          boxShadow: `0 10px 40px ${item.color}60, 0 0 20px ${item.color}40`,
          backdropFilter: 'blur(10px)'
        }}
        initial={{ x: -10, opacity: 0, scale: 0.8 }}
        whileHover={{ 
          x: 0, 
          opacity: 1, 
          scale: 1,
          transition: { duration: 0.2 }
        }}
      >
        <motion.span 
          className="text-sm font-medium text-white drop-shadow-lg"
          animate={{
            textShadow: [
              `0 0 10px ${item.color}`,
              `0 0 20px ${item.color}`,
              `0 0 10px ${item.color}`
            ]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {item.label}
        </motion.span>
        
        {/* Tooltip arrow */}
        <div
          className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0"
          style={{
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderRight: `6px solid ${item.color}`
          }}
        />
      </motion.div>

      {/* Corner accent decorations */}
      {isActive && (
        <>
          <motion.div
            className="absolute -top-1 -left-1 w-2 h-2 rounded-full"
            style={{ background: item.color, boxShadow: `0 0 10px ${item.color}` }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full"
            style={{ background: item.color, boxShadow: `0 0 10px ${item.color}` }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.75
            }}
          />
        </>
      )}
    </motion.button>
  );
}
