import { motion } from 'motion/react';
import { Code2, Database, Cloud, Server, Wrench, Globe } from 'lucide-react';

interface TechnologiesSectionProps {
  isDark: boolean;
}

interface TechCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  technologies: Technology[];
}

interface Technology {
  name: string;
  description: string;
  experience: string;
  icon?: string;
}

export function TechnologiesSection({ isDark }: TechnologiesSectionProps) {
  const techCategories: TechCategory[] = [
    {
      title: 'Frontend Development',
      icon: <Code2 className="w-6 h-6" />,
      color: '#8B5CF6',
      technologies: [
        {
          name: 'React',
          description: 'Building dynamic, component-based user interfaces',
          experience: 'Advanced - Used in multiple bootcamp and personal projects'
        },
        {
          name: 'JavaScript/TypeScript',
          description: 'Core language for web development',
          experience: 'Advanced - Daily use in full-stack development'
        },
        {
          name: 'HTML5 & CSS3',
          description: 'Semantic markup and modern styling',
          experience: 'Expert - Foundation of all web projects'
        },
        {
          name: 'Tailwind CSS',
          description: 'Utility-first CSS framework',
          experience: 'Intermediate - Used in modern web applications'
        }
      ]
    },
    {
      title: 'Backend & Databases',
      icon: <Database className="w-6 h-6" />,
      color: '#3B82F6',
      technologies: [
        {
          name: 'C# & .NET Core',
          description: 'Enterprise-level backend development',
          experience: 'Advanced - Primary backend technology from iTversity'
        },
        {
          name: 'MS SQL Server',
          description: 'Relational database management',
          experience: 'Advanced - Database design and optimization'
        },
        {
          name: 'Entity Framework',
          description: 'ORM for .NET applications',
          experience: 'Intermediate - Data access layer development'
        },
        {
          name: 'ASP.NET Web API',
          description: 'RESTful API development',
          experience: 'Advanced - Building scalable APIs'
        }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      color: '#10B981',
      technologies: [
        {
          name: 'Microsoft Azure',
          description: 'Cloud platform and services',
          experience: 'Advanced - Azure AD, Azure Monitor, App Services'
        },
        {
          name: 'Azure Active Directory',
          description: 'Identity and access management',
          experience: 'Advanced - User authentication and authorization'
        },
        {
          name: 'Git & GitHub',
          description: 'Version control and collaboration',
          experience: 'Advanced - Daily workflow and project management'
        },
        {
          name: 'Docker',
          description: 'Containerization and deployment',
          experience: 'Intermediate - Application containerization'
        }
      ]
    },
    {
      title: 'IT Infrastructure',
      icon: <Server className="w-6 h-6" />,
      color: '#F59E0B',
      technologies: [
        {
          name: 'Windows Server',
          description: 'Server administration and management',
          experience: 'Advanced - From FNB IT support experience'
        },
        {
          name: 'Networking (TCP/IP)',
          description: 'Network configuration and troubleshooting',
          experience: 'Advanced - Network infrastructure support'
        },
        {
          name: 'Office 365 Administration',
          description: 'Microsoft 365 ecosystem management',
          experience: 'Expert - Teams, Exchange, SharePoint administration'
        },
        {
          name: 'PowerShell',
          description: 'Automation and scripting',
          experience: 'Intermediate - Task automation and batch operations'
        }
      ]
    },
    {
      title: 'Tools & Productivity',
      icon: <Wrench className="w-6 h-6" />,
      color: '#EC4899',
      technologies: [
        {
          name: 'Microsoft Teams',
          description: 'Communication and collaboration',
          experience: 'Expert - Daily use with subtitles for accessibility'
        },
        {
          name: 'Visual Studio / VS Code',
          description: 'Integrated development environments',
          experience: 'Advanced - Primary development tools'
        },
        {
          name: 'WordPress',
          description: 'Content management system',
          experience: 'Intermediate - Website development and management'
        },
        {
          name: 'Figma',
          description: 'UI/UX design and prototyping',
          experience: 'Intermediate - Design collaboration and mockups'
        }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: <Globe className="w-6 h-6" />,
      color: '#6366F1',
      technologies: [
        {
          name: 'Machine Learning (Python)',
          description: 'AI/ML model development',
          experience: 'Learning - Capaciti bootcamp capstone project'
        },
        {
          name: 'TensorFlow',
          description: 'Machine learning framework',
          experience: 'Learning - Predictive analytics projects'
        },
        {
          name: 'Azure Cognitive Services',
          description: 'AI-powered APIs',
          experience: 'Learning - Accessibility and communication features'
        },
        {
          name: 'WebRTC',
          description: 'Real-time communication',
          experience: 'Learning - Video/audio communication platforms'
        }
      ]
    }
  ];

  return (
    <section id="technologies" className="py-20 relative overflow-hidden scroll-mt-20">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, ${isDark ? '#ffffff' : '#000000'} 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Technologies I Work With
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A comprehensive overview of the technologies, frameworks, and tools I use to build innovative solutions
          </motion.p>
        </motion.div>

        {/* Technology Categories Grid */}
        <div className="space-y-12">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-12 h-12 rounded-xl backdrop-blur-md border border-white/30 flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${category.color}30, ${category.color}10)`,
                    color: category.color 
                  }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {category.icon}
                </motion.div>
                <h3 
                  className="text-2xl"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Technologies Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    className="group p-5 rounded-2xl backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-300"
                    style={{
                      background: isDark 
                        ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))'
                        : 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))'
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: techIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {tech.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {tech.description}
                        </p>
                      </div>
                      
                      {/* Experience badge */}
                      <motion.div
                        className="px-2 py-1 rounded-lg text-xs whitespace-nowrap"
                        style={{
                          background: `${category.color}20`,
                          color: category.color,
                          border: `1px solid ${category.color}40`
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + techIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {tech.experience.split(' - ')[0]}
                      </motion.div>
                    </div>

                    {/* Experience details */}
                    <motion.p 
                      className="text-xs text-muted-foreground mt-2 pt-2 border-t border-white/10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 + techIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {tech.experience.includes(' - ') ? tech.experience.split(' - ')[1] : tech.experience}
                    </motion.p>

                    {/* Hover gradient */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${category.color}10, transparent 70%)`
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Want to see these technologies in action?
          </motion.p>
          <motion.a
            href="https://github.com/EAJ1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-300"
            style={{
              background: isDark 
                ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))'
                : 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))'
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code2 className="w-5 h-5" />
            <span>Explore My GitHub @EAJ1</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
