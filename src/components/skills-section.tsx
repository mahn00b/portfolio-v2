"use client"

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

// Define skill categories and their respective technologies
const skills = {
  frontend: [
    { name: "React", icon: "/images/react.svg" },
    { name: "Next.js", icon: "/images/nextjs.svg" },
    { name: "TypeScript", icon: "/images/typescript.png" },
    { name: "Tailwind CSS", icon: "/images/tailwind.svg" },
    { name: "GraphQL", icon: "/images/graphql.png" },
    { name: "Redux", icon: "/images/redux.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "/images/nodejs.png" },
    { name: "Express", icon: "/images/express.png" },
    { name: "Prisma", icon: "/images/prisma.png" },
    { name: "PostgreSQL", icon: "/images/postgres.png" },
    { name: "Redis", icon: "/images/redis.svg" },
    { name: "MongoDB", icon: "/images/mongodb.svg" },
  ],
  other: [
    { name: "Python", icon: "/images/python.svg" },
    { name: "PyTorch", icon: "/images/pytorch.png" },
    { name: "Docker", icon: "/images/docker.svg" },
    { name: "Git", icon: "/images/git.png" },
    { name: "AWS", icon: "/images/aws.png" },
    { name: "GitHub Actions", icon: "/images/github-actions.png" },
  ],
}

// Define placeholder SVGs for the tech icons (normally you'd use actual logos)
const placeholderIcons: Record<string, string> = {
  React: "React",
  "Next.js": "Next",
  TypeScript: "TS",
  "Tailwind CSS": "TW",
  GraphQL: "GQL",
  Redux: "RDX",
  "Node.js": "Node",
  Express: "Exp",
  Prisma: "PRS",
  PostgreSQL: "PG",
  Redis: "RDS",
  MongoDB: "MDB",
  Python: "PY",
  PyTorch: "PT",
  Docker: "DOC",
  Git: "Git",
  AWS: "AWS",
  "GitHub Actions": "GHA",
}

// Helper function to generate color based on skill name (just for visual variety)
const getSkillColor = (name: string, hasImage: boolean = false) => {
  if (hasImage) return "light:from-sky-200 light:via-blue-400 light:to-indigo-900 dark:from-gray-800 dark:to-gray-900";

  const colors = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-indigo-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-amber-500",
    "from-pink-500 to-rose-500",
    "from-teal-500 to-green-500",
  ]

  // Simple hash function to consistently get the same color for the same skill name
  const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return colors[hash % colors.length]
}

interface SkillCardProps {
  skill: {
    name: string
    icon: string
  }
}

function SkillCard({ skill }: SkillCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-4 flex flex-col items-center text-center">
        <div
          className={`w-16 h-16 mb-4 rounded-full flex items-center justify-center bg-gradient-to-r ${getSkillColor(skill.name, !imageError)}`}
        >
          {!imageError ? (
            <Image
              src={skill.icon || "/placeholder.svg"}
              alt={skill.name}
              width={40}
              height={40}
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-white font-semibold">
              {placeholderIcons[skill.name] || skill.name.substring(0, 3)}
            </span>
          )}
        </div>
        <h3 className="font-medium">{skill.name}</h3>
      </CardContent>
    </Card>
  )
}


export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <div ref={ref}>
      <Tabs defaultValue="frontend" className="w-full">
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <TabsList>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>
        </motion.div>

        {Object.entries(skills).map(([category, categorySkills]) => (
          <TabsContent key={category} value={category} className="mt-0">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              {categorySkills.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

