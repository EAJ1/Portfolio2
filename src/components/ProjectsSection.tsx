import React from 'react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ExternalLink, Github, Sparkles, Code2, Brain, Shield, Globe, Database, Cpu } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectsSectionProps {
  isDark: boolean;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  category: string;
  demoUrl: string;
  githubUrl: string;
  image: string;
  isVideo?: boolean;
  videoSrc?: string;
  highlights: string[];
  color: string;
  icon: React.ReactNode;
  featured: boolean;
}

export function ProjectsSection({ isDark }: ProjectsSectionProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'cvantage',
      title: 'AI Resume Builder – CVantage',
      subtitle: 'AI-Powered Resume Generator',
      description: 'An intelligent web-based resume generator that helps users create professional, ATS-friendly resumes using AI-powered suggestions.',
      detailedDescription: 'An intelligent web-based resume generator that helps users create professional, ATS-friendly resumes using AI-powered suggestions. Key Features: Smart AI suggestions for summaries, bullet points, and skills. Modern, Classic, and Creative templates (with stars & gradient themes). Theme customization and dark mode support. Template-specific export options (HTML, PDF, RTF).',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'],
      category: 'AI/Web Development',
      demoUrl: 'https://puppy-draw-08701859.figma.site',
      githubUrl: 'https://github.com/EAJ1/Cvantage',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN1bWUlMjBidWlsZGVyJTIwYXBwbGljYXRpb258ZW58MXx8fHwxNzYwNjE2Njg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      isVideo: true,
      videoSrc: '/CVantage.mov',
      highlights: [
        'Smart AI suggestions for summaries, bullet points, and skills',
        'Modern, Classic, and Creative templates with stars & gradient themes',
        'Theme customization and dark mode support',
        'Template-specific export options (HTML, PDF, RTF)',
        'Enhanced user experience with live preview and personalization'
      ],
      color: '#8B5CF6',
      icon: <Sparkles className="w-6 h-6" />,
      featured: true
    },
    {
      id: 'fraud-detection',
      title: 'AI Prototype Project – Finance Sector: Fraud Detection',
      subtitle: 'AI-Powered Fraud Detection Prototype',
      description: 'Developed an AI-powered fraud detection prototype for financial institutions to identify suspicious transactions in real time, improving accuracy while minimizing false positives.',
      detailedDescription: 'Developed an AI-powered fraud detection prototype for financial institutions to identify suspicious transactions in real time, improving accuracy while minimizing false positives. Key Features: Real-time transaction analysis using AI classification models. Output flags: ✅ Safe / ⚠️ Suspicious (with reason for flagging). Error handling: Users can verify flagged transactions to reduce false positives. Interactive dashboard prototype for bank staff + customer alert screen. Supports Figma/Miro prototypes, simulated transaction data (CSV/Google Sheets).',
      technologies: ['AI/ML: Classification model via Teachable Machine / Obviously AI', 'UI/UX Design: Figma, Miro', 'Data Simulation: Google Sheets API / CSV'],
      category: 'AI/ML',
      demoUrl: 'https://blanch-preset-07774997.figma.site/',
      githubUrl: 'https://github.com/EAJ1/Aifrauddetectionprototype',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmF1ZCUyMGRldGVjdGlvbiUyMGZpbmFuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDYxNjY4NXww&ixlib=rb-4.1.0&q=80&w=1080',
      isVideo: true,
      videoSrc: '/AI-Fraud.mov',
      highlights: [
        'Real-time transaction analysis using AI classification models',
        'Output flags: ✅ Safe / ⚠️ Suspicious with detailed reasons',
        'Interactive dashboard for bank staff and customer alerts',
        'Error handling with user verification to reduce false positives',
        'Ethical considerations: bias mitigation, privacy, and accessibility'
      ],
      color: '#3B82F6',
      icon: <Shield className="w-6 h-6" />,
      featured: true
    },
    {
      id: 'echobridge',
      title: 'EchoBridge – AI-Powered Accessibility Assistant',
      subtitle: 'Accessibility Innovation',
      description: 'Built an AI tool that transforms speech into text and text into voice, improving communication accessibility for people with hearing or speech difficulties.',
      detailedDescription: 'Built an AI tool that transforms speech into text and text into voice, improving communication accessibility for people with hearing or speech difficulties. Key Features: Real-time speech-to-text (STT) captioning and note generation. Text simplification using a large language model for readability. Text-to-speech (TTS) playback for users with visual impairments. Secure data storage for transcripts and session histories. Core AI Technologies: Speech-to-Text: OpenAI Whisper / Google Cloud Speech. Text-to-Speech: ElevenLabs / Azure Speech / AWS Polly. Language Model (LLM): OpenAI GPT for summarization and simplification.',
      technologies: ['Speech-to-Text: OpenAI Whisper / Google Cloud Speech', 'Text-to-Speech: ElevenLabs / Azure Speech / AWS Polly', 'Language Model (LLM): OpenAI GPT', 'Flask', 'HTML/CSS/JS'],
      category: 'Accessibility/AI',
      demoUrl: 'https://shred-bridge-13760391.figma.site/',
      githubUrl: 'https://github.com/EAJ1/Enhanceuiwithdarkmode',
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5JTIwYXNzaXN0YW50JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjA2MTY2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      isVideo: true,
      videoSrc: '/EchoBridge.mov',
      highlights: [
        'Real-time speech-to-text captioning and note generation',
        'Text simplification using LLM for better readability',
        'Text-to-speech playback for visual impairments',
        'Secure data storage for transcripts and histories',
        'Accessibility compliance, scalability, and user privacy'
      ],
      color: '#EC4899',
      icon: <Globe className="w-6 h-6" />,
      featured: true
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden scroll-mt-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(${isDark ? '#ffffff' : '#000000'} 1px, transparent 1px), 
                             linear-gradient(90deg, ${isDark ? '#ffffff' : '#000000'} 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `linear-gradient(135deg, ${['#8B5CF6', '#3B82F6', '#EC4899'][i % 3]}, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              Featured Work
            </span>
            <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </motion.div>

          <motion.h2 
            className="text-5xl mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Project Portfolio
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A collection of innovative projects showcasing full-stack development, AI/ML expertise, and accessibility-first design
          </motion.p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <motion.div
                className="relative h-full rounded-3xl overflow-hidden backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-500"
                style={{
                  background: isDark 
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))'
                    : 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))'
                }}
                whileHover={{ scale: 1.02, y: -10 }}
              >
                {/* Featured Badge */}
                <motion.div
                  className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full backdrop-blur-md border border-white/30 text-xs"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}40, ${project.color}20)`
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  ⭐ Featured
                </motion.div>

                {/* Project Image/Video */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      scale: hoveredProject === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {project.isVideo ? (
                      <video
                        src={project.videoSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        style={{ filter: 'brightness(0.8)' }}
                      />
                    ) : (
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{
                        background: `linear-gradient(180deg, transparent 0%, ${project.color}40 100%)`
                      }}
                    />
                  </motion.div>

                  {/* Category icon overlay */}
                  <motion.div
                    className="absolute top-4 left-4 w-12 h-12 rounded-full backdrop-blur-md border border-white/30 flex items-center justify-center"
                    style={{ color: project.color }}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {project.icon}
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  {/* Title and subtitle */}
                  <div>
                    <motion.p 
                      className="text-sm text-purple-600 dark:text-purple-400 mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {project.subtitle}
                    </motion.p>
                    <motion.h3 
                      className="text-xl mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {project.title}
                    </motion.h3>
                  </div>

                  {/* Description */}
                  <motion.p 
                    className="text-sm text-muted-foreground line-clamp-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.45 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-lg backdrop-blur-sm border border-white/20"
                        style={{
                          background: `${project.color}20`
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 + techIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs text-muted-foreground">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div 
                    className="flex gap-3 pt-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.button
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="flex-1 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}30, ${project.color}10)`
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Code2 className="w-4 h-4" />
                      <span className="text-sm">Details</span>
                    </motion.button>

                    <motion.a
                      href={project.demoUrl}
                      className="px-4 py-2 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>

                    <motion.a
                      href={project.githubUrl}
                      className="px-4 py-2 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${project.color}10, transparent 70%)`
                  }}
                />
              </motion.div>

              {/* Expanded Details Panel */}
              {expandedProject === project.id && (
                <motion.div
                  className="absolute top-full left-0 right-0 mt-4 p-6 rounded-2xl backdrop-blur-lg border border-white/20 z-30"
                  style={{
                    background: isDark 
                      ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(139, 92, 246, 0.2))'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(236, 72, 153, 0.2))'
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="mb-3" style={{ color: project.color }}>
                    Project Highlights
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className="text-purple-600 dark:text-purple-400 mt-1">▹</span>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    {project.detailedDescription}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Other Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl mb-8 text-center bg-gradient-to-r from-purple-600 via-blue-500 to-purple-800 bg-clip-text text-transparent">
            Additional Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative p-6 rounded-2xl backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-300"
                style={{
                  background: isDark 
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))'
                    : 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))'
                }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-xl backdrop-blur-md border border-white/30 flex items-center justify-center flex-shrink-0"
                    style={{ 
                      background: `linear-gradient(135deg, ${project.color}30, ${project.color}10)`,
                      color: project.color
                    }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {project.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <p className="text-sm text-purple-600 dark:text-purple-400 mb-1">
                        {project.subtitle}
                      </p>
                      <h4 className="text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h4>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-lg backdrop-blur-sm border border-white/20"
                          style={{ background: `${project.color}15` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-2">
                      <a
                        href={project.demoUrl}
                        className="text-sm text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
                      >
                        View Demo <ExternalLink className="w-3 h-3" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="text-sm text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
                      >
                        Source Code <Github className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl backdrop-blur-lg border border-white/20"
            style={{
              background: isDark 
                ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))'
                : 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))'
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Github className="w-6 h-6" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">View all projects on</p>
              <a 
                href="https://github.com/EAJ1" 
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile @EAJ1 →
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
