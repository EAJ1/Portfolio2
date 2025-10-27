import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}

export function ThemeToggle({ isDark, setIsDark }: ThemeToggleProps) {
  return (
    <motion.button
      className="fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-300"
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))'
          : 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))'
      }}
      onClick={() => setIsDark(!isDark)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        key={isDark ? 'moon' : 'sun'}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Moon className="w-6 h-6 text-blue-300" />
        ) : (
          <Sun className="w-6 h-6 text-purple-600" />
        )}
      </motion.div>
    </motion.button>
  );
}