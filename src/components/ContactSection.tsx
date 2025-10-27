import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

interface ContactSectionProps {
  isDark: boolean;
}

export function ContactSection({ isDark }: ContactSectionProps) {

  const contacts = [
    {
      icon: Mail,
      label: "Gmail",
      value: "bulumkojarana@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=bulumkojarana@gmail.com",
      color: "from-blue-500 to-purple-600"
    },

    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Africa Bulumko Jarana",
      href: "https://www.linkedin.com/in/africa-bulumko-jarana-967033285/",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@EAJ1",
      href: "https://github.com/EAJ1",
      color: "from-gray-700 to-gray-900 dark:from-gray-500 dark:to-gray-700"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "South Africa",
      href: "#",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const references = [
    {
      name: "Kristin Stai",
      position: "Metro Deaf School",
      location: "Minnesota, United States",
      email: "kstai@mdsmn.org"
    },
    {
      name: "Edward Van Niekerk",
      position: "Belgium iTversity Campus",
      location: "Pretoria, South Africa",
      email: "edward@belgiumcampus.ac.za"
    },
    {
      name: "Keshlin Pather",
      position: "First National Bank Manager",
      location: "Johannesburg, South Africa",
      email: "kpather4@fnb.co.za"
    },
    {
      name: "Oarabile Mogase",
      position: "Capaciti Talent Development Coach",
      location: "South Africa",
      email: "oarabile.mogase@capaciti.org.za",
      phone: undefined
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden scroll-mt-20">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0]
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
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to bring accessibility and innovation to your team? Let's connect and explore opportunities.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Contact methods */}
              <div className="space-y-6">
                {contacts.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    {...((contact.label === 'LinkedIn' || contact.label === 'GitHub') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex items-center gap-6 p-6 rounded-2xl backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-300 group"
                    style={{
                      background: isDark 
                        ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))'
                        : 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))'
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br shadow-lg flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg, var(--color-purple-500), var(--color-blue-500))` }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <contact.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    <div>
                      <h4 className="text-lg mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {contact.label}
                      </h4>
                      <p className="text-muted-foreground">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Accessibility note */}
              <motion.div
                className="p-6 rounded-2xl backdrop-blur-lg border border-white/20"
                style={{
                  background: isDark 
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))'
                    : 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg mb-3 text-purple-600 dark:text-purple-400">
                  Communication Preferences
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I communicate fluently in English (written), South African Sign Language, and American Sign Language.
                  For calls, I prefer using Microsoft Teams text chat for clear communication.
                  Email is always welcome for detailed discussions.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form & References */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* References */}
              <div 
                className="p-8 rounded-3xl backdrop-blur-lg border border-white/20"
                style={{
                  background: isDark 
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))'
                    : 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))'
                }}
              >
                <h3 className="text-2xl mb-6 text-purple-600 dark:text-purple-400">
                  References
                </h3>
                
                <div className="space-y-4">
                  {references.map((ref, index) => (
                    <motion.div
                      key={ref.name}
                      className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="mb-2">{ref.name}</h4>
                      <p className="text-sm text-muted-foreground mb-1">{ref.position}</p>
                      <p className="text-sm text-muted-foreground mb-2">{ref.location}</p>
                      <div className="text-xs text-muted-foreground space-y-1">
                        {ref.phone && <p>Phone: {ref.phone}</p>}
                        <p>Email: {ref.email}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}