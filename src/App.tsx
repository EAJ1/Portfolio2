import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ParticleField } from './components/ParticleField';
import { ThemeToggle } from './components/ThemeToggle';
import { FloatingNav } from './components/FloatingNav';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TechnologiesSection } from './components/TechnologiesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    // Loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          <motion.img
           src="/Portfolio.jpg"
            alt="Africa Bulumko Jarana"
            className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg border-4 border-purple-500/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          
          <motion.h1
            className="text-3xl bg-gradient-to-r from-purple-600 via-blue-500 to-purple-800 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Africa Bulumko Jarana
          </motion.h1>
          
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Loading portfolio...
          </motion.p>
          
          <motion.div
            className="mt-8 flex justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Particle Field Background */}
      <ParticleField isDark={isDark} />
      
      {/* Theme Toggle */}
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      
      {/* Floating Navigation */}
      <FloatingNav isDark={isDark} />
      
      {/* Main Content */}
      <AnimatePresence>
        <motion.main
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Hero Section */}
          <HeroSection isDark={isDark} />
          
          {/* About Section */}
          <AboutSection isDark={isDark} />
          
          {/* Skills Section */}
          <SkillsSection isDark={isDark} />
          
          {/* Projects Section */}
          <ProjectsSection isDark={isDark} />
          
          {/* Technologies Section */}
          <TechnologiesSection isDark={isDark} />
          
          {/* Experience Section */}
          <ExperienceSection isDark={isDark} />
          
          {/* Education Section */}
          <EducationSection isDark={isDark} />
          
          {/* Contact Section */}
          <ContactSection isDark={isDark} />
          
          {/* Footer */}
          <motion.footer
            className="py-12 text-center border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="container mx-auto px-6"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.p 
                className="text-muted-foreground mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                © 2025 Africa Bulumko Jarana. Crafted with passion and innovation.
              </motion.p>
              
              <motion.div
                className="flex justify-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                {['Accessibility', 'Innovation', 'Excellence'].map((word, index) => (
                  <motion.span
                    key={word}
                    className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-sm"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.footer>
        </motion.main>
      </AnimatePresence>
      
      {/* Cursor Trail Effect */}
      <motion.div
        className="fixed w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full pointer-events-none z-50 opacity-50 blur-sm"
        animate={{
          x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
          y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        style={{ 
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference'
        }}
      />
    </div>
  );
}