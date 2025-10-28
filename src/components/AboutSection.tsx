import React from 'react';
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
      {/* Insanely animated background elements */}
      <div className="absolute inset-0 opacity-40">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32"
          animate={{
            borderRadius: ["50%", "0%", "25%", "50%"],
            rotate: [0, 360, 180, 360],
            scale: [1, 1.5, 0.8, 1.3, 1],
            background: [
              "linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))",
              "linear-gradient(45deg, rgba(236, 72, 153, 0.3), rgba(147, 51, 234, 0.3))",
              "linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(236, 72, 153, 0.3))",
            ],
            x: [0, 30, -20, 15, 0],
            y: [0, -25, 20, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            filter: "blur(2xl)",
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40"
          animate={{
            borderRadius: ["0%", "50%", "25%", "0%"],
            rotate: [360, 0, 180, 0],
            scale: [1.3, 1, 1.8, 0.9, 1.3],
            background: [
              "linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(147, 51, 234, 0.3))",
              "linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))",
              "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(236, 72, 153, 0.3))",
            ],
            x: [0, -40, 25, -15, 0],
            y: [0, 30, -20, 15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            filter: "blur(2xl)",
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          }}
        />

        {/* Rotating icons */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: "linear-gradient(45deg, rgba(147, 51, 234, 0.4), rgba(59, 130, 246, 0.4))",
            borderRadius: "50%",
            filter: "blur(1px)",
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/4 w-20 h-20"
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: "linear-gradient(135deg, rgba(236, 72, 153, 0.4), rgba(147, 51, 234, 0.4))",
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            filter: "blur(1px)",
          }}
        />

        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            style={{
              left: `${20 + i * 8}%`,
              top: `${30 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 5 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Pulsing background waves */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 border-2 border-purple-500/20 rounded-full"
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 0.5, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeOut",
          }}
          style={{
            transformOrigin: "center",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 border border-blue-500/15 rounded-full"
          animate={{
            scale: [0, 2, 0],
            opacity: [0, 0.3, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeOut",
            delay: 2,
          }}
          style={{
            transformOrigin: "center",
          }}
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
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  rotate: 360,
                  scale: 1.2,
                  boxShadow: "0 0 25px rgba(147, 51, 234, 0.6)",
                }}
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 0.5,
                  rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 },
                }}
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