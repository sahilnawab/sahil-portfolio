"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight, Github, X, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  demoUrl: string
  repoUrl: string
  screenshots?: string[]
}

export function ProjectCard({ title, description, tags, image, demoUrl, repoUrl, screenshots = [] }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showPopover, setShowPopover] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-slide carousel every 5 seconds
  useEffect(() => {
    if (!showPopover || screenshots.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % screenshots.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [showPopover, screenshots.length])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  const handleViewDetails = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowPopover(true)
    setCurrentImageIndex(0)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="group"
      >
        <div
          className="relative h-full overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 group-hover:border-purple-500/50"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative h-full flex flex-col">
            <div className="relative overflow-hidden h-48">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <img
                src={image || "/placeholder.svg"}
                alt={title}
                className={`w-full h-full object-filla transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
              />
            </div>

            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-zinc-400 mb-4">{description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-zinc-700/50 hover:bg-zinc-700 text-zinc-300">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex justify-between mt-auto pt-4 border-t border-zinc-700/50">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-zinc-400 hover:text-white hover:bg-zinc-700/50"
                  asChild
                >
                  <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0"
                  onClick={handleViewDetails}
                >
                  View Details
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="absolute top-3 right-3 z-20">
              <div
                className={`w-3 h-3 rounded-full ${isHovered ? "bg-green-500" : "bg-zinc-500"} transition-colors duration-300`}
              ></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Popover Modal */}
      {showPopover && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4 bg-zinc-900 rounded-xl border border-zinc-700 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-700">
              <h3 className="text-2xl font-bold">{title}</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowPopover(false)}
                className="text-zinc-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Carousel */}
            <div className="relative aspect-video bg-zinc-800">
              <img
                src={screenshots.length > 0 ? screenshots[currentImageIndex] : image}
                alt={`${title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {screenshots.length > 1 && (
                <>
                  {/* Navigation buttons */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>

                  {/* Dots indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {screenshots.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-zinc-300 mb-4">{description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 text-sm bg-zinc-800 text-zinc-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Button variant="outline" asChild>
                  <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500" asChild>
                  <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                              <div className="flex items-end">
                 <Button className="bg-gradient-to-r from-slate-100 to-red-600"  onClick={() => setShowPopover(false)}>
                  {/* <Link href={demoUrl} target="_blank" rel="noopener noreferrer"> */}
                    Close
                <X className="h-5 w-5" />
                </Button> 
                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </>
  )
}
