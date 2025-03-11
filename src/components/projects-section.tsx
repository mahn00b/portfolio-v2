'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GITHUB_USERNAME } from "@/lib/constants";

// Define project data
const projects = [
  {
    id: 1,
    title: "Leetcode Solutions",
    description: "A repository of my solutions to Leetcode problems and corresponding explanations around commonly used algorithms. Includes explanations, time complexity analysis, and test cases.",
    image: "",
    technologies: ["Javascript", "Algorithms", "Data Structures", "Writing"],
    githubUrl: `https://github.com/${GITHUB_USERNAME}/leetcode`,
    released: true,
    liveUrl: ""
  },
  {
    id: 2,
    title: "Turborepo Boilerplate Template",
    description: "A template for setting up a monorepo with TurboRepo, TypeScript, and pnpm Workspaces. Includes configurations for ESLint, Prettier, Jest, and GitHub Actions.",
    image: "",
    technologies: ["TurboRepo", "TypeScript", "pnpm", "Monorepo", "eslint", "prettier", "jest", "GitHub Actions"],
    githubUrl: `https://github.com/${GITHUB_USERNAME}/`,
    released: true,
    liveUrl: ""
  },
  {
    id: 3,
    title: "AI-powered podcast",
    description: "An AI-powered podcast that generates audio episodes based on text input. The AI model is trained on a large dataset of podcast episodes and can generate realistic audio.",
    image: "",
    technologies: ["Python", "Transformers", "HuggingFace", "NLP"],
    released: false,
    githubUrl: "",
    liveUrl: ""
  }
];

export default function ProjectsSection() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
}

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl: string;
    released: boolean;
    liveUrl: string;
  };
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="overflow-hidden group h-full flex flex-col">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image || "/github-project.jpeg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <CardContent className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-medium mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-3">
            {!project.released &&
            <Button size="sm" variant="outline" asChild className="cursor-not-allowed hover:bg-transparent">
                <span>
                    <Github className="h-4 w-4 mr-2" />
                    Coming Soon...
                </span>
            </Button>}
            {project.githubUrl && <Button size="sm" variant="outline" asChild>
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Github className="h-4 w-4 mr-2" /> Code
              </Link>
            </Button>}
            {project.liveUrl && <Button size="sm" asChild>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </Link>
            </Button>}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
