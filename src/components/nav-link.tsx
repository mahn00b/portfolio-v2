"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(href)
      if (section) {
        const rect = section.getBoundingClientRect()
        setIsActive(rect.top <= 100 && rect.bottom >= 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initially without waiting for scroll

    return () => window.removeEventListener("scroll", handleScroll)
  }, [href])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const section = document.querySelector(href)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`text-sm font-medium transition-colors hover:text-primary ${
        isActive ? "text-primary" : "text-muted-foreground"
      }`}
    >
      {children}
    </Link>
  )
}

