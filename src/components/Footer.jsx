import React from 'react'
import { motion } from 'framer-motion'
import { HiHeart, HiMail, HiArrowRight } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Certifications', id: 'certifications' },
  ]

  const connectLinks = [
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com' },
    { name: 'Email', icon: HiMail, href: 'mailto:priyankachowdary20378@gmail.com' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="footer" className="bg-black text-white pt-20 pb-10 border-t border-white/10 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Priyanka<span className="text-green-500">.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Full-Stack Developer building scalable web applications and digital experiences. 
              Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              {connectLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-green-500 hover:bg-green-500/10 transition-all border border-white/5 hover:border-green-500/30"
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-green-500 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <HiArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-green-500" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Column (Replaces Form) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-green-500 rounded-full"></span>
              Connect
            </h3>
            <p className="text-gray-400 mb-6">
              Feel free to reach out for collaborations or just a friendly hello.
            </p>
            <motion.a
              href="mailto:priyankachowdary20378@gmail.com"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-green-500/30 hover:bg-green-500/5 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                <HiMail size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Email Me</p>
                <p className="text-white group-hover:text-green-400 transition-colors">priyankachowdary20378@gmail.com</p>
              </div>
            </motion.a>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Priyanka Dabbara. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <HiHeart className="text-green-500 animate-pulse" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
