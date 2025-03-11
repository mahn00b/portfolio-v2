"use client"

import { motion } from "framer-motion"

interface SectionTitleProps {
  title: string
  subtitle: string
  id?: string
}

export default function SectionTitle({ title, subtitle, id }: SectionTitleProps) {
  return (
    <div id={id} className="flex flex-col items-center text-center mb-10 scroll-mt-20">
      <motion.h2
        className="text-3xl font-bold tracking-tight mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="w-20 h-1.5 bg-primary rounded-full mb-6"
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
      <motion.p
        className="text-muted-foreground max-w-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {subtitle}
      </motion.p>
    </div>
  )
}

