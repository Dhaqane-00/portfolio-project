"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Full-Stack Developer crafting digital experiences with modern technologies. Passionate about creating clean, efficient code and beautiful user interfaces that solve real-world problems.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} className="text-center max-w-4xl mx-auto" />;
}
