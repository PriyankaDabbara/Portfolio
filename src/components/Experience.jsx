import React from 'react'
import { motion } from 'framer-motion'
import { HiBriefcase, HiCalendar } from 'react-icons/hi'

const Experience = () => {
  const experiences = [
    {
      role: "Full-Stack Developer - Internship",
      company: "Starteryou",
      period: "Jan 2025 - May 2025",
      responsibilities: [
        "Developed and integrated front-end and back-end features using React, Node.js, Express, and MongoDB, ensuring a seamless user experience and robust system architecture.",
        "Built secure authentication and user data management functionalities, implementing industry best practices for data protection and access control.",
        "Designed and developed RESTful APIs, enabling efficient communication between the client and server while ensuring scalability and maintainability.",
        "Implemented caching mechanisms to optimize API performance, reducing database queries and improving response times for enhanced application efficiency.",
        "Developed and managed HTTP cookies for session handling, authentication, and personalized user experiences, improving security and usability.",
        "Containerized applications with Docker and contributed to CI/CD pipelines and Azure infrastructure setup using Terraform.",
        "Utilized GitHub for collaborative development, overseeing issue tracking, version control, code reviews, and maintaining documentation in alignment with Agile sprints."
      ]
    }
  ]

  return (
    <section id="experience" className="relative bg-black py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Professional <span className="text-green-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10 hover:border-green-500/30 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-8">
                  <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20 text-green-400">
                    <HiBriefcase size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <p className="text-xl text-green-400 mb-2 font-semibold tracking-wide">{exp.company}</p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <HiCalendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                      className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors"
                    >
                      <span className="text-green-500 mt-1.5 text-xs">●</span>
                      <span className="leading-relaxed">{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
