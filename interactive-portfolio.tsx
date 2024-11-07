'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function InteractivePortfolio() {
  const [currentSection, setCurrentSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigateTo = (section: string) => {
    setCurrentSection(section)
    setMobileMenuOpen(false)
  }

  const renderHeader = () => (
    <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Ced</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Button variant="ghost" onClick={() => navigateTo('home')}>Home</Button></li>
            <li><Button variant="ghost" onClick={() => navigateTo('about')}>About</Button></li>
            <li><Button variant="ghost" onClick={() => navigateTo('portfolio')}>Portfolio</Button></li>
            <li><Button variant="ghost" onClick={() => navigateTo('contact')}>Contact</Button></li>
          </ul>
        </nav>
        <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {mobileMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center py-4">
            <li><Button variant="ghost" onClick={() => navigateTo('home')}>Home</Button></li>
            <li><Button variant="ghost" onClick={() => navigateTo('about')}>About</Button></li>
            <li><Button variant="ghost" onClick={() => navigateTo('portfolio')}>Portfolio</Button></li>
            <li><Button variant="ghost" onClick={() => navigateTo('contact')}>Contact</Button></li>
          </ul>
        </nav>
      )}
    </header>
  )

  const renderHome = () => (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">Welcome to My Portfolio</h2>
      <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
        I'm a passionate tech professional specializing in AI and web development. 
        Let's create something amazing together!
      </p>
      <div className="flex space-x-4">
        <Button onClick={() => navigateTo('about')}>Learn More</Button>
        <Button variant="outline" onClick={() => navigateTo('contact')}>Get in Touch</Button>
      </div>
    </section>
  )

  const renderAbout = () => (
    <section className="mb-16 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="mb-4">
            Hello! I'm a passionate tech professional with expertise in AI and web development. 
            With a strong background in [Your Specific Areas], I bring innovative solutions to complex problems.
          </p>
          <h3 className="text-xl font-semibold mb-2">Certifications</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Certification 1</li>
            <li>Certification 2</li>
            <li>Certification 3</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>Skill 1</Badge>
            <Badge>Skill 2</Badge>
            <Badge>Skill 3</Badge>
            <Badge>Skill 4</Badge>
            <Badge>Skill 5</Badge>
          </div>
        </div>
        <div className="relative h-64 md:h-full">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Your Name"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )

  const renderPortfolio = () => (
    <section className="mb-16 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="transition-transform hover:scale-105">
          <CardHeader>
            <CardTitle>AI Image Recognition</CardTitle>
            <CardDescription>Machine Learning Project</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="AI Image Recognition Project"
              width={400}
              height={200}
              className="rounded-lg mb-4"
            />
            <p>
              Developed an AI-powered image recognition system using TensorFlow and React. 
              This project can identify objects in uploaded images with high accuracy.
            </p>
            <Button className="mt-4">View Details</Button>
          </CardContent>
        </Card>
        <Card className="transition-transform hover:scale-105">
          <CardHeader>
            <CardTitle>Smart Home Automation</CardTitle>
            <CardDescription>IoT Project</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Smart Home Automation Project"
              width={400}
              height={200}
              className="rounded-lg mb-4"
            />
            <p>
              Created a smart home automation system using IoT devices and a React Native mobile app. 
              Control lights, temperature, and security with voice commands or app interface.
            </p>
            <Button className="mt-4">Learn More</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )

  const renderContact = () => (
    <section className="animate-fadeIn">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
          <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded" required></textarea>
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
      <div className="flex justify-center space-x-4 mt-8">
        <Button variant="outline" asChild>
          <Link href="mailto:your.email@example.com">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </Button>
      </div>
    </section>
  )

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {renderHeader()}
      <main className="flex-grow container my-8">
        {currentSection === 'home' && renderHome()}
        {currentSection === 'about' && renderAbout()}
        {currentSection === 'portfolio' && renderPortfolio()}
        {currentSection === 'contact' && renderContact()}
      </main>
      <footer className="bg-muted">
        <div className="container py-4 text-center">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
