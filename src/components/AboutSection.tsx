import { motion } from 'motion/react';
import { Ear, Heart, Code, Users } from 'lucide-react';

interface AboutSectionProps {
  isDark: boolean;
}

export function AboutSection({ isDark }: AboutSectionProps) {
  const features = [
    {
      icon: Ear,
      title: "Accessibility Advocate",
      description: "Bringing unique perspective to inclusive design with cochlear implant experience and sign language fluency."
    },
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Proficient in React, C#, MS SQL, and modern web technologies with hands-on enterprise experience."
    },
    {
      icon: Users,
      title: "IT Support Expert",
      description: "Azure Active Directory, networking, and enterprise systems with focus on user experience."
    },
    {
      icon: Heart,
      title: "Problem Solver",
      description: "Motivated by challenges and making positive impact through technology solutions."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden scroll-mt-20">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6] 
          }}
          transition={{ duration: 6, repeat: Infinity }}
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
            About Me
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            As a deaf software developer with cochlear implant experience, I bring a unique perspective to technology. 
            My journey from Metro Deaf School in Minnesota to enterprise IT at First National Bank has shaped my 
            understanding of inclusive design and the power of accessible technology.
          </motion.p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-6 rounded-2xl backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-300"
              style={{
                background: isDark 
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))'
                  : 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))'
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>
              
              <h4 className="mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}