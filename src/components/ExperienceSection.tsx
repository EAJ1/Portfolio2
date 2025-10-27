import { motion } from 'motion/react';
import { Calendar, MapPin, Building, Award, Brain } from 'lucide-react';

interface ExperienceSectionProps {
  isDark: boolean;
}

export function ExperienceSection({ isDark }: ExperienceSectionProps) {
  const experiences = [
    {
      title: "IT Support and Full Stack Developer",
      company: "Capaciti",
      location: "Johannesburg, South Africa",
      period: "Aug 2025 - Present",
      type: "Learnership",
      description: "Currently enrolled in a structured IT learnership program with a focus on Artificial Intelligence (AI), IT Support, and Full Stack Development. The program equips me with cutting-edge skills in modern technology domains.",
      responsibilities: [
        "AI Foundations: Understanding machine learning concepts, data analysis, and practical applications of AI",
        "IT Support: Hands-on experience in troubleshooting hardware/software issues and end-user support",
        "Working with collaboration tools such as Microsoft Teams",
        "Full Stack Development: Building web applications using front-end (HTML, CSS, JavaScript)",
        "Back-end technologies, including databases and APIs",
        "Creating complete, functional solutions from concept to deployment",
        "Machine learning model implementation and testing",
        "Data analysis and visualization techniques"
      ],
      icon: Brain,
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "IT Support Technician",
      company: "First National Bank",
      location: "Johannesburg, South Africa",
      period: "Apr 2024 - Mar 2025",
      type: "Full-time",
      description: "Providing comprehensive IT support with focus on Azure Active Directory, networking infrastructure, and user experience optimization.",
      responsibilities: [
        "Azure Active Directory administration and user management",
        "Server virtualization and LAN infrastructure maintenance",
        "Troubleshooting Windows Server and Exchange Server issues",
        "Application support and SNOW ticket management",
        "DHCP, DNS, and Microsoft Office 365 administration",
        "Security and firewall configuration",
        "Hardware support for HP & Dell systems",
        "Teams communication support for deaf accessibility"
      ],
      icon: Building,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Customer Service Volunteer",
      company: "Selo Events Business",
      location: "South Africa",
      period: "Dec 2015 - Present",
      type: "Volunteer",
      description: "Supporting family events business with technical setup, customer service, and streaming solutions during holiday periods.",
      responsibilities: [
        "Tent structure setup and event logistics",
        "Sound system operation and technical support",
        "Live streaming services for events",
        "Customer service and client relationship management",
        "Event planning and coordination assistance"
      ],
      icon: Award,
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden scroll-mt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 12, repeat: Infinity }}
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
            Experience
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Professional journey spanning AI development, enterprise IT support and customer service excellence
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
              style={{ transformOrigin: 'top' }}
            />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.period}`}
                  className="relative flex items-start gap-8"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r shadow-lg"
                    style={{ background: `linear-gradient(135deg, var(--color-purple-500), var(--color-blue-500))` }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <exp.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    className="flex-1 p-8 rounded-3xl backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-300"
                    style={{
                      background: isDark 
                        ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))'
                        : 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))'
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl mb-2">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-2">
                            <Building className="w-5 h-5" />
                            <span className="text-lg">{exp.company}</span>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-sm">
                          {exp.type}
                        </span>
                      </div>

                      <div className="flex items-center gap-6 text-muted-foreground text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="mb-4 text-purple-600 dark:text-purple-400">Key Responsibilities:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <motion.div
                            key={respIndex}
                            className="flex items-start gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + respIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {responsibility}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Motivation quote */}
        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto p-8 rounded-3xl backdrop-blur-lg border border-white/20"
          style={{
            background: isDark 
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))'
              : 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))'
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.blockquote 
            className="text-xl italic text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            "I am primarily motivated by the opportunity to solve problems and make a positive impact. 
            As an IT Support Technician, I find great satisfaction in helping users resolve their technical 
            issues and improve their overall experience with technology."
          </motion.blockquote>
          <motion.cite 
            className="text-purple-600 dark:text-purple-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
          >
            - Africa Bulumko Jarana
          </motion.cite>
        </motion.div>
      </div>
    </section>
  );
}