import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const SocialSidebar = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: HiMail, href: 'mailto:priyankachowdary20378@gmail.com', label: 'Email' },
  ]

  return (
    <div className="fixed bottom-0 left-8 z-50 hidden md:flex flex-col items-center gap-6">
      <div className="flex flex-col gap-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target={link.label !== 'Email' ? '_blank' : undefined}
            rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.5 + index * 0.1 }}
            whileHover={{ scale: 1.2, y: -3, color: '#22c55e' }}
            className="text-gray-400 transition-colors duration-300"
          >
            <link.icon size={24} />
          </motion.a>
        ))}
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: '8rem' }}
        transition={{ duration: 0.6, delay: 2 }}
        className="w-[1px] bg-gray-400"
      ></motion.div>
    </div>
  )
}

export default SocialSidebar
