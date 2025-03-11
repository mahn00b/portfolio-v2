"use client"

import { CalendarDays, Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ThemeToggle from "@/components/theme-toggle"
import ContactForm from "@/components/contact-form"
import AnimatedSection from "@/components/animated-section"
import SectionTitle from "@/components/section-title"
import AnimatedText from "@/components/animated-text"
import NavLink from "@/components/nav-link"
import { motion } from "framer-motion"
import { GITHUB_USERNAME, LINKEDIN_URL, CONTACT_EMAIL } from "@/lib/constants"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Mahmoud</span>Yousif
          </Link>
          <nav className="hidden md:flex gap-6 mx-6">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="outline" size="icon" className="rounded-full">
              <Link href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon" className="rounded-full">
              <Link href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href={`mailto:${CONTACT_EMAIL}`} target="_blank" rel="noopener noreferrer">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <AnimatedSection className="py-10 md:py-14 lg:py-20 flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 space-y-4">
            <AnimatedText
              text="Mahmoud Yousif"
              className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl"
            />
            <AnimatedText
              text="Full Stack Engineer"
              className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl"
            />
            <AnimatedText
              text="Creating Digital Experiences"
              className="text-primary block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl"
            />
            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I build accessible, user-focused applications using modern web technologies.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button className="rounded-full" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <Link href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-primary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image src="/me.jpeg?height=400&width=400" alt="Profile" fill className="object-cover" priority />
          </motion.div>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection className="py-14" delay={0.2}>
          <SectionTitle
            id="about"
            title="About Me"
            subtitle="I'm a passionate full-stack software engineer with expertise in building modern web applications. With a background in computer science and years of industry experience, I specialize in creating scalable, performant, and accessible digital solutions that solve real-world problems."
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CalendarDays className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">Experience</h3>
                <p className="text-muted-foreground">
                  7+ years of professional software development experience across various industries.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.7 15C6.7 16.5 7.7 17.5 9.2 17.5H11.9C13.2 17.5 14.2 16.5 14.2 15.2C14.2 13.9 13.6 13.4 12.7 13.1L8.7 11.9C7.8 11.6 7.2 11.1 7.2 9.8C7.2 8.5 8.2 7.5 9.5 7.5H12.2C13.7 7.5 14.7 8.5 14.7 10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 6V18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-lg mb-2">Frontend Focus</h3>
                <p className="text-muted-foreground">
                  Specialized in responsive, accessible, and performant user interfaces using modern frameworks.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6.5V9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 10.5V12.9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 10.5V12.9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 13.5V16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 17.5C20 19.985 16.418 22 12 22C7.582 22 4 19.985 4 17.5C4 15.015 7.582 13 12 13C16.418 13 20 15.015 20 17.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M4 8.5C4 10.985 7.582 13 12 13C16.418 13 20 10.985 20 8.5C20 6.015 16.418 4 12 4C7.582 4 4 6.015 4 8.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-lg mb-2">Backend Expertise</h3>
                <p className="text-muted-foreground">
                  Experienced in database design, API development, and server-side optimization.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection className="py-14" delay={0.3}>
          <SectionTitle
            id="skills"
            title="Technical Skills"
            subtitle="I've worked with various technologies throughout my career. Here are some of the key tools and frameworks I specialize in."
          />

          <SkillsSection />
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection className="py-14" delay={0.4}>
          <SectionTitle
            id="projects"
            title="Featured Projects"
            subtitle="Here are some of my recent projects showcasing my technical skills and problem-solving abilities."
          />
          <ProjectsSection />
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection className="py-14" delay={0.5}>
          <SectionTitle
            id="contact"
            title="Get In Touch"
            subtitle="Interested in working together? Feel free to contact me for any project or collaboration opportunities."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-10">
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-medium mb-4">Contact Information</h3>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    github.com/mahn00b
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {LINKEDIN_URL.replace("https://", "")}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="border-t">
        <div className="container py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">© {new Date().getFullYear()} Mahmoud Yousif. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Button asChild variant="ghost" size="icon">
              <Link href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href={`mailto:${CONTACT_EMAIL}`} target="_blank" rel="noopener noreferrer">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

