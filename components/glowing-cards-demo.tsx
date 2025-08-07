"use client";
import { Code, Palette, Rocket, Users, Zap, Globe } from 'lucide-react';
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function GlowingCardsDemo() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
          What I Do Best
        </h2>
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Code className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Full-Stack Development"
            description="Building scalable web applications with modern technologies like React, Next.js, and Node.js."
          />
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Palette className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="UI/UX Design"
            description="Creating beautiful, intuitive interfaces that users love to interact with."
          />
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Rocket className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Performance Optimization"
            description="Making applications lightning fast with advanced optimization techniques and best practices."
          />
          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Zap className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Modern Tech Stack"
            description="Always staying up-to-date with the latest technologies and industry trends."
          />
          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Globe className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Global Collaboration"
            description="Working with teams worldwide to deliver exceptional digital experiences."
          />
        </ul>
      </div>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-gray-200 dark:border-gray-800 p-2 md:rounded-3xl md:p-3 bg-white dark:bg-black">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] bg-white dark:bg-black">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-300 dark:border-gray-600 p-2 bg-gray-50 dark:bg-gray-900">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-gray-600 md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
