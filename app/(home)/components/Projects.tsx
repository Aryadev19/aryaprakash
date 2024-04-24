import React from "react";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

function Projects() {
  const projects = [
    {
      title: "Movie Website",
      tech: [SiNextdotjs, SiReact, SiTailwindcss],
      link: "https://primeflix-web.vercel.app/",
      cover: "/primeflix.png",
      background: "bg-green-500",
    },
    {
      title: "Notion Clone",
      tech: [SiNextdotjs, SiReact, SiPrisma, SiTailwindcss],
      link: "https://jotion-beta-tawny.vercel.app/",
      cover: "/jotion.png",
      background: "bg-indigo-500",
    },
    {
      title: "Real-Time Chat App",
      tech: [SiNextdotjs, SiReact, SiSupabase, SiTailwindcss],
      link: "https://daily-chat-web.vercel.app/",
      cover: "/dailychat.png",
      background: "bg-indigo-500",
    },
    {
      title: "Portfolio Website",
      tech: [SiHtml5, SiJavascript, SiCss3],
      link: "https://aryadev.vercel.app/",
      cover: "/devfolio.png",
      background: "bg-green-500",
    },
    {
      title: "Memory Game",
      tech: [SiReact, SiTailwindcss],
      link: "https://memento-seven.vercel.app/",
      cover: "/memento.png",
      background: "bg-green-500",
    },
    {
      title: "Factomania",
      tech: [SiHtml5, SiJavascript, SiCss3],
      link: "https://factomania.vercel.app/",
      cover: "/factomania.png",
      background: "bg-indigo-500",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎯"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, idx) => {
          return (
            <Link href={project.link} key={idx}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, idx) => {
                        return <Icon className="size-8" key={idx} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
