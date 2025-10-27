import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award, Book } from 'lucide-react';

interface EducationSectionProps {
  isDark: boolean;
}

export function EducationSection({ isDark }: EducationSectionProps) {
  const education = [
    {
      title: "Diploma in Information Technology",
      subtitle: "Specializing in Software Development",
      institution: "Belgium iTversity Campus",
      location: "Pretoria, South Africa",
      period: "Jul 2021 - Dec 2023",
      description: "Comprehensive program covering software development fundamentals, database management, and enterprise application development. Built strong foundation in modern programming languages and development methodologies.",
      highlights: [
        "Software Development Fundamentals",
        "Database Design & Management",
        "Web Development Technologies",
        "Object-Oriented Programming",
        "System Analysis & Design",
        "Project Management"
      ],
      icon: GraduationCap,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "High School Diploma",
      subtitle: "Matric Certificate",
      institution: "Metro Deaf School",
      location: "Minnesota, United States",
      period: "Jan 2019 - Jun 2020",
      description: "Transformative experience completing final years of high school in specialized deaf education environment. Developed strong communication skills in American Sign Language and built cultural awareness.",
      highlights: [
        "American Sign Language Proficiency",
        "Cross-Cultural Communication",
        "Adaptive Learning Strategies",
        "Leadership & Self-Advocacy",
        "Technology Integration",
        "Community Building"
      ],
      icon: Book,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const certifications = [
    { name: "AWS Cloud Practitioner Foundation", date: "Aug 2025" },
    { name: "iOS Development", date: "Aug 2025" },
    { name: "Front-End Software Engineering Job Simulation", date: "Aug 2025" },
    { name: "Customer Service Job Simulation", date: "Aug 2025" },
    { name: "Service Desk Job Simulation", date: "Aug 2025" },
    { name: "Technology Engineering Job Simulation", date: "Aug 2025" },
    { name: "Microsoft Azure Fundamentals: AZ-900", date: "Aug 2025" },
    { name: "Azure AI Fundamentals: AI-900", date: "Aug 2025" },
    { name: "Advanced Software Engineering Job Simulation", date: "Aug 2025" },
    { name: "ASP.NET Core Foundations", date: "Aug 2025" }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden scroll-mt-20">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-2xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-2xl"
          animate={{ 
            rotate: [360, 0],
            scale: [1.3, 1, 1.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
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
            Education
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Academic journey from deaf education excellence to technical mastery
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                className="relative p-8 rounded-3xl backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-300 group"
                style={{
                  background: isDark 
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))'
                    : 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))'
                }}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ rotate: 360 }}
                  >
                    <edu.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {edu.title}
                    </h3>
                    <p className="text-lg text-purple-600 dark:text-purple-400 mb-2">
                      {edu.subtitle}
                    </p>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <motion.p 
                  className="text-muted-foreground mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {edu.description}
                </motion.p>

                {/* Highlights */}
                <div>
                  <h4 className="text-lg mb-4 text-purple-600 dark:text-purple-400">
                    Key Highlights:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <motion.div
                        key={highlightIndex}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + highlightIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex-shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating decoration */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-60"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-3xl text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Certifications & Training
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="p-4 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 group"
                style={{
                  background: isDark 
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))'
                    : 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))'
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0"
                    initial={{ rotate: -180 }}
                    whileInView={{ rotate: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Award className="w-5 h-5 text-white" />
                  </motion.div>
                  
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm mb-1 leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Educational quote */}
        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto p-8 rounded-3xl backdrop-blur-lg border border-white/20"
          style={{
            background: isDark 
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))'
              : 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))'
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.blockquote 
            className="text-lg italic text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
          >
            "Moving to Metro Deaf School when I was in grade 11 was such a great and important experience for me. 
            It shaped my understanding of accessibility and inclusive communication, preparing me for my journey in technology."
          </motion.blockquote>
          <motion.cite 
            className="text-purple-600 dark:text-purple-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            viewport={{ once: true }}
          >
            - Africa Bulumko Jarana
          </motion.cite>
        </motion.div>
      </div>
    </section>
  );
}