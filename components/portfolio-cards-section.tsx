"use client";
import { cn } from "@/lib/utils";

export function PortfolioCardsSection() {
  const cards = [
    {
      id: 1,
      title: "Full-Stack Journey",
      description: "From frontend magic to backend architecture, crafting complete digital solutions that scale.",
      author: "John Doe",
      readTime: "3 min read",
      backgroundImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      id: 2,
      title: "Design Philosophy",
      description: "Where aesthetics meet functionality. Creating interfaces that users love and remember.",
      author: "John Doe", 
      readTime: "2 min read",
      backgroundImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      id: 3,
      title: "Innovation Mindset",
      description: "Always exploring new technologies and pushing boundaries to deliver cutting-edge solutions.",
      author: "John Doe",
      readTime: "4 min read", 
      backgroundImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2125&q=80",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
          My Story
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {cards.map((card) => (
            <PortfolioCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface PortfolioCardProps {
  title: string;
  description: string;
  author: string;
  readTime: string;
  backgroundImage: string;
  avatar: string;
}

function PortfolioCard({ 
  title, 
  description, 
  author, 
  readTime, 
  backgroundImage, 
  avatar 
}: PortfolioCardProps) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 transition-transform duration-300 hover:scale-105",
          "bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-900"
        )}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-20 group-hover/card:opacity-40"></div>
        
        <div className="flex flex-row items-center space-x-4 z-10">
          <img
            height="40"
            width="40"
            alt="Avatar"
            src={avatar || "/placeholder.svg"}
            className="h-10 w-10 rounded-full border-2 border-white object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {author}
            </p>
            <p className="text-sm text-gray-300">{readTime}</p>
          </div>
        </div>
        
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10 mb-3">
            {title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
