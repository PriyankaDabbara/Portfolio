import React from 'react'
import { motion } from 'framer-motion'
import { HiAcademicCap, HiLocationMarker } from 'react-icons/hi'

const About = () => {
  const education = [
    {
      degree: "Master of Science – Information Technology",
      institution: "Clark University",
      location: "Worcester, MA",
      period: "Dec 2023 - Dec 2025"
    },
    {
      degree: "Bachelor of Science - Computer Science",
      institution: "Ballari Institute of Technology and Management",
      location: "India",
      period: "Aug 2019 – Aug 2023"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="relative bg-black py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About <span className="text-green-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-green-400">Summary</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I am a highly motivated Full-Stack Developer with a strong foundation in computer science 
              and engineering, currently pursuing a master's in information technology at Clark University. 
              Experienced in designing and developing scalable web applications using React, Node.js, Express, 
              and MongoDB, with expertise in secure authentication, data management, and RESTful API development.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Skilled in optimizing API performance through caching mechanisms and enhancing security with 
              session management using HTTP cookies. Successfully led projects such as Shrinky.in URL Shortener, 
              Decentralized File Storage System, and a GUI-based Movie Database System.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Holds certifications from Wipro Talent Next Digital, Udemy, and QSpiders, with a published 
              research paper in IJRASET, demonstrating a commitment to continuous learning and innovation.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-green-600/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
              <HiAcademicCap size={28} className="text-green-400" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-green-500/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-green-500"></div>
                  <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                  <p className="text-green-400 mb-2 font-medium">{edu.institution}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <HiLocationMarker size={16} />
                      {edu.location}
                    </div>
                    <span className="hidden sm:inline text-gray-600">•</span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
