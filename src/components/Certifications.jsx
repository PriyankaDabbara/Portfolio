import React from 'react'
import { motion } from 'framer-motion'
import { HiBadgeCheck, HiCalendar } from 'react-icons/hi'

const Certifications = () => {
  const certifications = [
    {
      title: "Java J2EE",
      issuer: "Wipro Talent Next Digital",
      date: "May 2022",
      description: "Comprehensive certification in Java Enterprise Edition development",
    },
    {
      title: "Web Technology",
      issuer: "QSpiders",
      date: "Feb 2023",
      description: "Advanced web development technologies and best practices",
    },
    {
      title: "Microsoft Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "May 2025",
      description: "Azure cloud fundamentals and services",
    }
  ]

  const achievements = [
    "Published research paper in IJRASET",
    "Successfully led multiple full-stack projects",
    "Contributed to open-source development practices"
  ]

  return (
    <section id="certifications" className="relative bg-black py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Certifications & <span className="text-green-500">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/50 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 rounded-xl text-green-400 group-hover:bg-green-500/20 transition-colors">
                    <HiBadgeCheck size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 text-white group-hover:text-green-400 transition-colors">{cert.title}</h3>
                    <p className="text-gray-400 mb-2 text-sm font-medium">{cert.issuer}</p>
                    <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                      <HiCalendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                <span className="text-gray-300 font-medium">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
