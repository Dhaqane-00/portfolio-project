"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click"; // Corrected import path
import { Github, ExternalLink, Calendar, Code, Users, Zap } from 'lucide-react';

interface ProjectCard {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  githubLink: string;
  liveLink: string;
  tech: string[];
  year: string;
  content: () => React.ReactNode;
}

const portfolioProjects: ProjectCard[] = [
  {
    description: "Full-Stack E-Commerce Solution",
    title: "ShopFlow Platform",
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    ctaText: "View Details",
    ctaLink: "https://github.com",
    githubLink: "https://github.com",
    liveLink: "https://shopflow-demo.vercel.app",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    year: "2024",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-neutral-600 dark:text-neutral-400">
            A comprehensive e-commerce platform built with modern web technologies. 
            Features include user authentication, product management, shopping cart, 
            and secure payment processing with Stripe integration.
          </p>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <Code className="h-4 w-4" />
                Key Features
              </h4>
              <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
                <li>• User Authentication & Profiles</li>
                <li>• Product Catalog & Search</li>
                <li>• Shopping Cart & Checkout</li>
                <li>• Payment Processing</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Performance
              </h4>
              <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
                <li>• 95+ Lighthouse Score</li>
                <li>• Server-Side Rendering</li>
                <li>• Image Optimization</li>
                <li>• Edge Deployment</li>
              </ul>
            </div>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400">
            The platform includes an admin dashboard for inventory management, 
            order tracking, and analytics. Built with scalability in mind using 
            modern architecture patterns and deployed on Vercel for optimal performance.
          </p>
        </div>
      );
    },
  },
  {
    description: "Real-time Collaboration Tool",
    title: "TaskSync Pro",
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    ctaText: "View Details",
    ctaLink: "https://github.com",
    githubLink: "https://github.com",
    liveLink: "https://tasksync-demo.vercel.app",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    year: "2024",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-neutral-600 dark:text-neutral-400">
            A collaborative task management application with real-time updates and 
            team collaboration features. Built for modern teams who need seamless 
            productivity tools.
          </p>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Collaboration
              </h4>
              <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
                <li>• Real-time Updates</li>
                <li>• Team Workspaces</li>
                <li>• File Attachments</li>
                <li>• Comment System</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <Code className="h-4 w-4" />
                Technology
              </h4>
              <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
                <li>• WebSocket Integration</li>
                <li>• RESTful API</li>
                <li>• JWT Authentication</li>
                <li>• Responsive Design</li>
              </ul>
            </div>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400">
            Features include drag-and-drop task management, deadline tracking, 
            progress visualization, and mobile-responsive design for productivity on the go.
          </p>
        </div>
      );
    },
  },
  {
    description: "AI-Powered Chat Interface",
    title: "ChatGPT Clone",
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
    ctaText: "View Details",
    ctaLink: "https://github.com",
    githubLink: "https://github.com",
    liveLink: "https://ai-chat-demo.vercel.app",
    tech: ["Next.js", "OpenAI", "WebSocket", "Tailwind", "Vercel"],
    year: "2023",
    content: () => {
      return (
        <div className="space-y-4">
          <p className="text-neutral-600 dark:text-neutral-400">
            An intelligent conversation platform powered by OpenAI GPT models with 
            real-time streaming capabilities and context-aware responses.
          </p>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <Zap className="h-4 w-4" />
                AI Features
              </h4>
              <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
                <li>• GPT-4 Integration</li>
                <li>• Context Memory</li>
                <li>• Stream Responses</li>
                <li>• Custom Prompts</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <Users className="h-4 w-4" />
                User Experience
              </h4>
              <ul className="text-xs space-y-1 text-neutral-600 dark:text-neutral-400">
                <li>• Dark/Light Mode</li>
                <li>• Conversation History</li>
                <li>• Export Chats</li>
                <li>• Mobile Optimized</li>
              </ul>
            </div>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400">
            Built with Next.js and deployed on Vercel Edge Functions for global 
            low-latency performance. Includes user authentication and conversation management.
          </p>
        </div>
      );
    },
  },
];

export function ExpandableProjectsSection() {
  const [active, setActive] = useState<ProjectCard | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
          Featured Projects
        </h2>
        
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm h-full w-full z-50"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 grid place-items-center z-[100] p-4">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="flex absolute top-4 right-4 items-center justify-center bg-white dark:bg-black rounded-full h-8 w-8 z-10"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <img
                    width={600}
                    height={300}
                    src={active.src || "/placeholder.svg"}
                    alt={active.title}
                    className="w-full h-60 object-cover"
                  />
                </motion.div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-2xl text-neutral-700 dark:text-neutral-200 mb-2"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400 mb-4"
                      >
                        {active.description}
                      </motion.p>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm text-neutral-500">
                          <Calendar className="h-4 w-4" />
                          {active.year}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {active.tech.slice(0, 3).map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mb-6">
                    <motion.a
                      href={active.githubLink}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={active.liveLink}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </motion.a>
                  </div>

                  <div className="relative">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="max-h-60 overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {typeof active.content === "function" ? active.content() : active.content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>

        <ul className="space-y-4">
          {portfolioProjects.map((project, index) => (
            <motion.div
              layoutId={`card-${project.title}-${id}`}
              key={`card-${project.title}-${id}`}
              onClick={() => setActive(project)}
              className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer border border-gray-200 dark:border-gray-800 transition-colors"
            >
              <div className="flex gap-6 flex-col md:flex-row flex-1">
                <motion.div layoutId={`image-${project.title}-${id}`}>
                  <img
                    width={120}
                    height={80}
                    src={project.src || "/placeholder.svg"}
                    alt={project.title}
                    className="h-20 w-30 md:h-16 md:w-24 rounded-lg object-cover"
                  />
                </motion.div>
                <div className="flex-1">
                  <motion.h3
                    layoutId={`title-${project.title}-${id}`}
                    className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-2"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${project.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-sm mb-3"
                  >
                    {project.description}
                  </motion.p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <motion.button
                layoutId={`button-${project.title}-${id}`}
                className="px-6 py-2 text-sm rounded-full font-medium bg-gray-100 hover:bg-black hover:text-white dark:bg-gray-800 dark:hover:bg-white dark:hover:text-black text-black dark:text-white mt-4 md:mt-0 transition-colors"
              >
                {project.ctaText}
              </motion.button>
            </motion.div>
          ))}
        </ul>
      </div>
    </div>
  );
}

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black dark:text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
