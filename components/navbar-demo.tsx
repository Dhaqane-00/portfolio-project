"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Moon, Sun, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";

export function NavbarDemo({ 
  darkMode, 
  toggleDarkMode 
}: { 
  darkMode: boolean; 
  toggleDarkMode: () => void; 
}) {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

function Navbar({ 
  className, 
  darkMode, 
  toggleDarkMode 
}: { 
  className?: string; 
  darkMode: boolean; 
  toggleDarkMode: () => void; 
}) {
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#about">My Story</HoveredLink>
            <HoveredLink href="#about">Skills & Expertise</HoveredLink>
            <HoveredLink href="#about">Experience</HoveredLink>
            <HoveredLink href="#about">Education</HoveredLink>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="E-Commerce Platform"
              href="#projects"
              src="/placeholder.svg?height=70&width=140&text=E-Commerce"
              description="Full-stack solution with Next.js and Stripe integration"
            />
            <ProductItem
              title="Task Management"
              href="#projects"
              src="/placeholder.svg?height=70&width=140&text=Task+App"
              description="Collaborative task management with real-time updates"
            />
            <ProductItem
              title="AI Chat Interface"
              href="#projects"
              src="/placeholder.svg?height=70&width=140&text=AI+Chat"
              description="Modern chat interface with AI integration"
            />
            <ProductItem
              title="Portfolio Website"
              href="#projects"
              src="/placeholder.svg?height=70&width=140&text=Portfolio"
              description="Responsive portfolio with dark mode support"
            />
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#contact">Web Development</HoveredLink>
            <HoveredLink href="#contact">Mobile Development</HoveredLink>
            <HoveredLink href="#contact">UI/UX Design</HoveredLink>
            <HoveredLink href="#contact">Consulting</HoveredLink>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#contact">Get In Touch</HoveredLink>
            <HoveredLink href="mailto:john@example.com">Email Me</HoveredLink>
            <HoveredLink href="https://github.com">GitHub</HoveredLink>
            <HoveredLink href="https://linkedin.com">LinkedIn</HoveredLink>
          </div>
        </MenuItem>
        
        {/* Dark Mode Toggle */}
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full w-8 h-8"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </Menu>
    </div>
  );
}
