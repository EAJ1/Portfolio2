import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ExternalLink, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { MorphingBlob } from './MorphingBlob';

interface HeroSectionProps {
  isDark: boolean;
}

export function HeroSection({ isDark }: HeroSectionProps) {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden scroll-mt-0">
      <MorphingBlob isDark={isDark} />
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.span 
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                Hello, I'm Africa Bulumko Jarana
              </motion.span>
              
              <h1 className="text-6xl lg:text-7xl">
                <motion.span 
                  className="block bg-gradient-to-r from-purple-600 via-blue-500 to-purple-800 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  Software
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  Developer
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-xl text-muted-foreground max-w-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                Passionate about creating inclusive digital experiences. Specialized in React, C#, and IT Support with a unique perspective on accessibility.
              </motion.p>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <motion.a
                href="mailto:bulumkojarana@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
                bulumkojarana@gmail.com
              </motion.a>
              

              
              <motion.a
                href="https://www.linkedin.com/in/africa-bulumko-jarana-967033285/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </motion.a>
              
              <motion.a
                href="https://github.com/EAJ1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                GitHub
              </motion.a>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <motion.a
                href="https://cv-africa-bulumko-jarana.tiiny.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
                View CV
              </motion.a>
              
              <motion.button
                className="px-8 py-4 border border-purple-500/50 hover:border-purple-500 rounded-full transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('about')}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="relative w-80 h-80 mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Floating geometric shapes with dark mode support */}
              
              <motion.div
                className={`absolute -bottom-4 -right-4 w-16 h-16 rounded-full backdrop-blur-sm transition-all duration-500 ${
                  isDark 
                    ? 'bg-gradient-to-br from-pink-400/25 to-purple-400/25 shadow-lg shadow-pink-400/10' 
                    : 'bg-gradient-to-br from-pink-500/30 to-purple-500/30 shadow-lg shadow-pink-500/20'
                }`}
                animate={{ 
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.3,
                  background: isDark 
                    ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.4), rgba(147, 51, 234, 0.4))'
                    : 'linear-gradient(135deg, rgba(236, 72, 153, 0.5), rgba(147, 51, 234, 0.5))'
                }}
              />
              
              {/* Additional floating elements for enhanced dark mode effect */}
              
              <motion.div
                className={`absolute top-8 -left-8 w-6 h-6 rounded-full backdrop-blur-sm transition-all duration-500 ${
                  isDark 
                    ? 'bg-gradient-to-br from-indigo-400/20 to-purple-400/20' 
                    : 'bg-gradient-to-br from-indigo-500/25 to-purple-500/25'
                }`}
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />



              {/* Main image container */}
              <motion.div
                className={`relative w-full h-full rounded-full overflow-hidden transition-all duration-500 ${
                  isDark
                    ? 'shadow-2xl shadow-purple-500/20 ring-4 ring-purple-400/30 ring-offset-4 ring-offset-background/50'
                    : 'shadow-2xl shadow-purple-600/30 ring-4 ring-purple-500/40 ring-offset-4 ring-offset-background/80'
                }`}
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.15))'
                    : 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))'
                }}
                animate={{
                  rotate: [-10, 10, -10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  boxShadow: isDark
                    ? '0 25px 50px -12px rgba(147, 51, 234, 0.4)'
                    : '0 25px 50px -12px rgba(147, 51, 234, 0.6)',
                  rotate: 0,
                  ringColor: isDark ? 'rgba(147, 51, 234, 0.5)' : 'rgba(147, 51, 234, 0.6)',
                  ringOffsetWidth: '6px'
                }}
              >
                <motion.img
                  src="/Portfolio.jpg"
                  alt="Africa Bulumko Jarana"
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    isDark
                      ? 'brightness-110 contrast-105 saturate-110'
                      : 'brightness-100 contrast-100 saturate-100'
                  }`}
                  whileHover={{
                    scale: 1.02,
                    filter: isDark
                      ? 'brightness(1.15) contrast(1.1) saturate(1.15)'
                      : 'brightness(1.05) contrast(1.05) saturate(1.1)'
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Dynamic overlay gradient based on theme */}
                <motion.div 
                  className={`absolute inset-0 transition-all duration-500 ${
                    isDark 
                      ? 'bg-gradient-to-t from-purple-900/10 via-transparent to-blue-900/10' 
                      : 'bg-gradient-to-t from-purple-900/20 via-transparent to-blue-900/20'
                  }`}
                  whileHover={{
                    background: isDark 
                      ? 'linear-gradient(to top, rgba(88, 28, 135, 0.05), transparent, rgba(30, 58, 138, 0.05))'
                      : 'linear-gradient(to top, rgba(88, 28, 135, 0.15), transparent, rgba(30, 58, 138, 0.15))'
                  }}
                />
                
                {/* Theme-aware glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-full transition-all duration-500 ${
                    isDark
                      ? 'ring-2 ring-purple-400/20 ring-offset-2 ring-offset-background/50'
                      : 'ring-2 ring-purple-600/30 ring-offset-2 ring-offset-background/80'
                  }`}
                  whileHover={{
                    ringColor: isDark ? 'rgba(147, 51, 234, 0.4)' : 'rgba(147, 51, 234, 0.5)'
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
}