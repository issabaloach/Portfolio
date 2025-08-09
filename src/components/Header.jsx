"use client"

import { useState } from "react"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800">Muhammad Issa</h1>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-primary hover:underline transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-primary hover:underline transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-primary hover:underline transition-colors duration-200"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary hover:underline transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/issabaloach"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary hover:scale-110 transition-transform duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/muhammadissa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary hover:scale-110 transition-transform duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:muhammadissa848@gmail.com"
              className="text-gray-600 hover:text-primary hover:scale-110 transition-transform duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-expanded={isOpen ? "true" : "false"}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:underline transition-colors duration-200"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:underline transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:underline transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:underline transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            {/* Mobile Social Links */}
            <div className="flex justify-center space-x-6 py-4 border-t border-gray-200 mt-2">
              <a
                href="https://github.com/issabaloach"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary hover:scale-110 transition-transform duration-200"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/muhammadissa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary hover:scale-110 transition-transform duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:muhammadissa848@gmail.com"
                className="text-gray-600 hover:text-primary hover:scale-110 transition-transform duration-200"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header
