import React from 'react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface SkillsectionProps {
  isDark: boolean;
}

interface Skill {
  name: string;
  category: string;
  level: number;
  color: string;
}

export function SkillsSection({ isDark }: SkillsectionProps) {
  const [animated, setAnimated] = useState(false);

  const skills: Skill[] = [
    { name: 'React', category: 'Frontend', level: 90, color: '#61DAFB' },
    { name: 'JavaScript', category: 'Frontend', level: 85, color: '#F7DF1E' },
    { name: 'HTML5', category: 'Frontend', level: 95, color: '#E34F26' },
    { name: 'CSS', category: 'Frontend', level: 90, color: '#1572B6' },
    { name: 'C#', category: 'Backend', level: 80, color: '#239120' },
    { name: 'MS SQL', category: 'Database', level: 75, color: '#CC2927' },
    { name: 'Azure AD', category: 'Cloud', level: 85, color: '#0078D4' },
    { name: 'Windows Server', category: 'Infrastructure', level: 80, color: '#0078D4' },
    { name: 'Networking', category: 'Infrastructure', level: 85, color: '#FF6B35' },
    { name: 'WordPress', category: 'CMS', level: 70, color: '#21759B' },
    { name: 'Office 365', category: 'Productivity', level: 90, color: '#D83B01' },
    { name: 'Problem Solving', category: 'Soft Skills', level: 95, color: '#8B5CF6' },
    { name: 'Communication', category: 'Soft Skills', level: 90, color: '#10B981' },
    { name: 'Leadership', category: 'Soft Skills', level: 85, color: '#F59E0B' },
    { name: 'Creativity', category: 'Soft Skills', level: 88, color: '#EC4899' },
    { name: 'Adaptability', category: 'Soft Skills', level: 92, color: '#3B82F6' },
    { name: 'Time Management', category: 'Soft Skills', level: 87, color: '#8B5CF6' },
    { name: 'Teamwork', category: 'Soft Skills', level: 93, color: '#06B6D4' }
  ];

  const categories = ['Frontend', 'Backend', 'Database', 'Cloud', 'Infrastructure', 'CMS', 'Productivity', 'Soft Skills'];

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 relative overflow-hidden scroll-mt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A comprehensive toolkit spanning frontend development, backend systems, cloud infrastructure, and IT support
          </motion.p>
        </motion.div>

        {/* Skills by category */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            
            return (
              <motion.div
                key={category}
                className="space-y-6"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl mb-6 text-purple-600 dark:text-purple-400">
                  {category}
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="relative p-6 rounded-2xl backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-300 group"
                      style={{
                        background: isDark 
                          ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))'
                          : 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))'
                      }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      {/* Skill circle */}
                      <div className="relative w-20 h-20 mx-auto mb-4">
                        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 32 32">
                          {/* Background circle */}
                          <circle
                            cx="16"
                            cy="16"
                            r="12"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            className="text-gray-300 dark:text-gray-700"
                          />
                          {/* Progress circle */}
                          <motion.circle
                            cx="16"
                            cy="16"
                            r="12"
                            stroke={skill.color}
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 12}`}
                            strokeDashoffset={animated ? `${2 * Math.PI * 12 * (1 - skill.level / 100)}` : `${2 * Math.PI * 12}`}
                            transition={{ duration: 2, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                            className="drop-shadow-lg"
                          />
                        </svg>
                        
                        {/* Percentage text */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.span
                            className="text-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1 + categoryIndex * 0.1 + skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                      </div>

                      {/* Skill name */}
                      <h4 className="text-center mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {skill.name}
                      </h4>

                      {/* Hover effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
}