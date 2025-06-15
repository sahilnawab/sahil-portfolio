"use client"

import { useState } from "react"
import { X, Download, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

interface ResumeViewerProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Replace this with your actual resume PDF URL
  const resumeUrl = "/resume.pdf" // Put your resume.pdf in the public folder

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Sahil_Nawab_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleOpenInNewTab = () => {
    window.open(resumeUrl, "_blank")
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-6xl h-[90vh] mx-4 bg-zinc-900 rounded-xl border border-zinc-700 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-700 bg-zinc-800/50">
          <h3 className="text-xl font-bold">Resume - Sahil Nawab</h3>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={handleOpenInNewTab} className="text-zinc-400 hover:text-white">
              <ExternalLink className="h-4 w-4 mr-2" />
              Open in New Tab
            </Button>
            <Button variant="ghost" size="sm" onClick={handleDownload} className="text-zinc-400 hover:text-white">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-zinc-400 hover:text-white">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="relative w-full h-full bg-zinc-800">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
                <p className="text-zinc-400">Loading resume...</p>
              </div>
            </div>
          )}

          <iframe
            src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
             type="application/pdf"
            className="w-full h-full border-0"
            title="Sahil Nawab Resume"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false)
              console.error("Failed to load PDF")
            }}
          />

          {/* Fallback for browsers that don't support PDF viewing */}
          <div
            className="absolute inset-0 flex items-center justify-center bg-zinc-800"
            style={{ display: isLoading ? "none" : "flex" }}
          >
            <div className="text-center">
              <p className="text-zinc-400 mb-4">Unable to display PDF in browser.</p>
              <div className="flex gap-4 justify-center">
                <Button onClick={handleDownload} className="bg-gradient-to-r from-purple-500 to-pink-500">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
                <Button variant="outline" onClick={handleOpenInNewTab}>
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open in New Tab
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
