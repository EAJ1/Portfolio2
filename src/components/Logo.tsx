import React from 'react';
import { motion } from 'motion/react';

interface LogoProps {
  isDark: boolean;
}

export function Logo({ isDark }: LogoProps) {
  return (
    <motion.div
      className="fixed top-6 left-6 z-50 cursor-pointer"
      initial={{ opacity: 0, scale: 0.8, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        type: "spring",
        stiffness: 200
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      {/* Logo Container with Glow Effect */}
      <motion.div
        className="relative px-4 py-2 rounded-xl backdrop-blur-sm border"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, rgba(30, 30, 50, 0.8), rgba(20, 20, 40, 0.8))'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(250, 250, 255, 0.8))',
          borderColor: isDark ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.2)',
          boxShadow: isDark
            ? '0 8px 32px rgba(139, 92, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.1)'
            : '0 8px 32px rgba(139, 92, 246, 0.2), 0 0 40px rgba(59, 130, 246, 0.1)'
        }}
        animate={{
          boxShadow: isDark
            ? [
                '0 8px 32px rgba(139, 92, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.1)',
                '0 8px 32px rgba(139, 92, 246, 0.4), 0 0 80px rgba(59, 130, 246, 0.2)',
                '0 8px 32px rgba(139, 92, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.1)'
              ]
            : [
                '0 8px 32px rgba(139, 92, 246, 0.2), 0 0 40px rgba(59, 130, 246, 0.1)',
                '0 8px 32px rgba(139, 92, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.15)',
                '0 8px 32px rgba(139, 92, 246, 0.2), 0 0 40px rgba(59, 130, 246, 0.1)'
              ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-50"
          style={{
            background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))',
            filter: 'blur(10px)'
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Logo Text */}
        <motion.h1
          className="relative text-2xl font-bold select-none"
          style={{
            background: 'linear-gradient(135deg, #8B5CF6, #3B82F6, #EC4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: isDark ? 'brightness(1.1)' : 'brightness(0.9)'
          }}
          animate={{
            textShadow: isDark
              ? [
                  '0 0 20px rgba(139, 92, 246, 0.5)',
                  '0 0 30px rgba(59, 130, 246, 0.7), 0 0 40px rgba(236, 72, 153, 0.3)',
                  '0 0 20px rgba(139, 92, 246, 0.5)'
                ]
              : [
                  '0 0 15px rgba(139, 92, 246, 0.4)',
                  '0 0 25px rgba(59, 130, 246, 0.6), 0 0 35px rgba(236, 72, 153, 0.2)',
                  '0 0 15px rgba(139, 92, 246, 0.4)'
                ]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ABJ
        </motion.h1>

        {/* Floating Particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: ['#8B5CF6', '#3B82F6', '#EC4899'][i],
              boxShadow: `0 0 10px ${['#8B5CF6', '#3B82F6', '#EC4899'][i]}`
            }}
            initial={{
              x: Math.random() * 60 - 30,
              y: Math.random() * 40 - 20,
              opacity: 0
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Pulse Ring */}
        <motion.div
          className="absolute inset-0 rounded-xl border-2"
          style={{
            borderColor: 'rgba(139, 92, 246, 0.3)',
            borderStyle: 'solid'
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
}
