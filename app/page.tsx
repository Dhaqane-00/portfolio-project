"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TextGenerateEffectDemo } from "@/components/text-generate-effect-demo"
import { NavbarDemo } from "@/components/navbar-demo"
import { GlowingCardsDemo } from "@/components/glowing-cards-demo"
import { PortfolioCardsSection } from "@/components/portfolio-cards-section"
import { ExpandableProjectsSection } from "@/components/expandable-projects-section" // Import the new component
import { GetInTouchSection } from "@/components/get-in-touch-section"
import TargetCursor from "@/components/ui/target-cursor"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python",
    "Tailwind CSS", "PostgreSQL", "MongoDB", "AWS", "Docker", "Git"
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      {/* Custom Cursor */}
      <TargetCursor
        targetSelector=".cursor-target"
        spinDuration={2}
        hideDefaultCursor={true}
      />

      {/* Navigation */}
      <NavbarDemo darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-4xl font-bold">
              JD
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight">
            John Doe
          </h1>
          <div className="mb-8">
            <TextGenerateEffectDemo />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="cursor-target bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-full px-8 py-6 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="cursor-target rounded-full">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="cursor-target rounded-full">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="cursor-target rounded-full">
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Cards Section (My Story) */}
      <section className="bg-gray-50 dark:bg-gray-950">
        <PortfolioCardsSection />
      </section>

      {/* Glowing Cards Section (What I Do Best) */}
      <section>
        <GlowingCardsDemo />
      </section>

      {/* Expandable Projects Section */}
      <section id="projects" className="bg-gray-50 dark:bg-gray-950">
        <ExpandableProjectsSection /> {/* Use the new expandable projects section */}
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience building
                web applications. I love creating clean, efficient code and beautiful user interfaces
                that solve real-world problems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or enjoying a good cup of coffee while reading tech blogs.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="cursor-target justify-center py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section id="contact">
        <GetInTouchSection />
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 John Doe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
