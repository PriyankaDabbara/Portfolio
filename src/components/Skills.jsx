import React from 'react'
import { motion } from 'framer-motion'
import {
  FaReact, FaNode, FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker, FaAws
} from 'react-icons/fa'
import {
  SiTypescript, SiMongodb, SiExpress, SiKubernetes, SiMicrosoftazure, SiJira, SiGithub,
  SiMysql, SiPostgresql, SiPostman, SiLinux, SiSass, SiSolidity
} from 'react-icons/si'

const Skills = () => {
  const allSkills = [
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Java", icon: FaJava },
    { name: "Python", icon: FaPython },
    { name: "pandas", icon: null },
    { name: "NumPy", icon: null },
    { name: "Matplotlib", icon: null },
    { name: "TensorFlow", icon: null },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "React", icon: FaReact },
    { name: "Node.js", icon: FaNode },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
    { name: "Git", icon: FaGitAlt },
    { name: "Docker", icon: FaDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "AWS", icon: FaAws },
    { name: "Azure", icon: SiMicrosoftazure },
    { name: "Postman", icon: SiPostman },
    { name: "JIRA", icon: SiJira },
    { name: "GitHub", icon: SiGithub },
  ]

  return (
    <section id="skills" className="relative bg-black py-20">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical <span className="text-green-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {allSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-green-500/50 hover:bg-white/10 transition-all group cursor-pointer"
            >
              {skill.icon ? (
                <skill.icon className="text-gray-400 group-hover:text-green-400 transition-colors mb-3 duration-300" size={40} />
              ) : (
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-3 group-hover:bg-green-500/20 transition-colors duration-300">
                  <span className="text-gray-300 group-hover:text-green-400 font-bold text-sm">{skill.name.charAt(0)}</span>
                </div>
              )}
              <span className="text-sm font-medium text-gray-300 group-hover:text-white text-center transition-colors duration-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
