import React from 'react'
import { motion } from 'framer-motion'
import { HiCode, HiExternalLink } from 'react-icons/hi'
import { FaPython, FaEthereum } from 'react-icons/fa'
import { SiTypescript, SiSolidity } from 'react-icons/si'

const Projects = () => {
  const projects = [
    {
      title: "Shrinky.in URL Shortener",
      description: "A customizable link shortener with features like multi-user flow, spam protection, password protection, QR generation, and reporting. It provides detailed insights into user behavior, allowing content owners to control online sharing without fear of misuse.",
      technologies: ["Python", "HTML", "Bootstrap", "JavaScript", "SQLite"],
      icons: [FaPython],
      color: "bg-orange-500" // Kept for legacy, but we will override with green theme
    },
    {
      title: "Movie Database System",
      description: "A GUI-based system that stores movie information, allows CRUD operations, and provides an intuitive interface for managing movie data efficiently.",
      technologies: ["Python", "Tkinter", "MySQL", "Figma"],
      icons: [FaPython],
      color: "bg-blue-500"
    },
    {
      title: "Decentralized File Storage System",
      description: "A decentralized approach to storing data online, spreading data across a network of individual computers around the world instead of relying on a single company's data centers. Offers enhanced security and privacy compared to traditional cloud services.",
      technologies: ["SASS", "TypeScript", "Solidity", "Hardhat", "MetaMask", "web3js", "Pinata"],
      icons: [SiTypescript, SiSolidity, FaEthereum],
      color: "bg-purple-500"
    }
  ]

  return (
    <section id="projects" className="relative bg-black py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-green-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all duration-300 group relative flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                  <HiCode size={24} className="text-green-400" />
                </div>
                <div className="flex gap-2">
                   {project.icons.map((Icon, idx) => (
                    <Icon key={idx} size={20} className="text-gray-500 group-hover:text-green-400 transition-colors" />
                  ))}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed text-sm flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full border border-white/10 group-hover:border-green-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-green-500 hover:text-green-400 transition-colors mt-auto"
              >
                View Project <HiExternalLink size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
