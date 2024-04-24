"use client";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { SiGit, SiJavascript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiSupabase, SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Supabase",
      Icon: SiSupabase,
    },
    {
      text: "Postgres",
      Icon: SiPostgresql,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      text: "Javascript",
      Icon: SiJavascript,
    },
    {
      text: "Python",
      Icon: SiPython,
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🤹"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}

export default Skills;
