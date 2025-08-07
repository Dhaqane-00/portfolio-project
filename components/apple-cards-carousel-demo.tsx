"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Featured Projects & Work
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ title, description }: { title: string; description: string }) => {
  return (
    <>
      {[...new Array(2).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                {title}
              </span>{" "}
              {description}
            </p>
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl h-64 md:h-96 w-full mx-auto mt-8 flex items-center justify-center">
              <div className="text-4xl md:text-6xl">💻</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Full-Stack Development",
    title: "E-Commerce Platform",
    src: "/placeholder.svg?height=600&width=400",
    content: <DummyContent 
      title="Complete E-Commerce Solution" 
      description="Built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, shopping cart, and secure payment processing. Deployed on Vercel with PostgreSQL database." 
    />,
  },
  {
    category: "Mobile Development",
    title: "Task Management App",
    src: "/placeholder.svg?height=600&width=400",
    content: <DummyContent 
      title="Collaborative Task Management" 
      description="React Native application with real-time synchronization, team collaboration features, and offline support. Integrated with Firebase for backend services and push notifications." 
    />,
  },
  {
    category: "AI & Machine Learning",
    title: "AI Chat Interface",
    src: "/placeholder.svg?height=600&width=400",
    content: <DummyContent 
      title="Intelligent Conversation Platform" 
      description="Modern chat interface powered by OpenAI GPT models. Features include context-aware responses, conversation history, and real-time streaming. Built with Next.js and WebSocket technology." 
    />,
  },
  {
    category: "Web Development",
    title: "Portfolio Website",
    src: "/placeholder.svg?height=600&width=400",
    content: <DummyContent 
      title="Personal Brand Showcase" 
      description="Responsive portfolio website with dark mode support, smooth animations, and optimized performance. Built with Next.js, Tailwind CSS, and deployed on Vercel." 
    />,
  },
  {
    category: "Data Visualization",
    title: "Analytics Dashboard",
    src: "/placeholder.svg?height=600&width=400",
    content: <DummyContent 
      title="Business Intelligence Platform" 
      description="Interactive dashboard for data visualization and business analytics. Features real-time charts, filtering capabilities, and export functionality. Built with React, D3.js, and Node.js backend." 
    />,
  },
  {
    category: "Open Source",
    title: "Component Library",
    src: "/placeholder.svg?height=600&width=400",
    content: <DummyContent 
      title="Reusable UI Components" 
      description="Open-source React component library with TypeScript support, comprehensive documentation, and Storybook integration. Published on npm with automated testing and CI/CD pipeline." 
    />,
  },
];
