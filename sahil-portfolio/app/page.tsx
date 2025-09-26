"use client";
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { useRef } from "react"
import { ClientWrapper } from "@/components/Client-wrapper";

// import {} from "../public/smart-interview screen-shots/smart-interview-home.png"
// import {} from "../public/smart-interview screen-shots/Screenshot 2025-06-09 173216.png"
// import {} from "../public/smart-interview screen-shots/smart-interview-question.png"
// import {} from "../public/Portfolio/my-portfolio.png"

export default function Portfolio() {
  const contactRef = useRef<HTMLElement | null>(null);
  const projectRef = useRef<HTMLElement | null>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const resumeUrl = "/resume.pdf"
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Sahil_Nawab_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav  />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">Full Stack Developer</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Sahil Nawab
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              I build complete web applications with expertise in both backend and frontend technologies, delivering
              end-to-end solutions for global clients.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0"
                onClick={scrollToProject}
              >
                <span className="relative z-10 flex items-center">
                  View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500"
                onClick={scrollToContact}
              >
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/sahilnawab" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/sahilnawabindia" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>

              <Link href="mailto:sahilnawab.india@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <ClientWrapper>
              <CreativeHero />
            </ClientWrapper>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/sahil_nawab.png"
                  className="w-[700px] h-[900px] object-cover"
                  alt="Shine Kyaw Kyaw Aung"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for new projects</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300"> I'm a dedicated Full Stack Developer with hands-on experience in building web applications for clients across different industries. I specialize in ASP.NET Core, React.js, and cloud-based deployment, delivering scalable and production-ready solutions. 
                  </p>
                   <p className="text-lg text-zinc-300 mt-4"> Since 2023, I've been working as a freelance Full Stack Developer, collaborating with global clients to turn ideas into full-fledged applications. From designing robust APIs to crafting responsive UIs, I handle the entire development lifecycle. 
                    </p>
                     <p className="text-lg text-zinc-300 mt-4"> I'm passionate about solving real-world problems through code, following clean architecture principles, and staying updated with the latest trends in the .NET ,Java and React ecosystems. 

                     </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Sahil Nawab</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">sahilnawab.india@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">UK/India</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">Open to opportunities</div>
                  </div>
                </div>

                <div className="mt-8">
                  <ClientWrapper>
                    <Button className="bg-zinc-800 hover:bg-zinc-700 text-white" onClick={handleDownload}>Download Resume</Button>
                  </ClientWrapper>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="ASP.NET Core" level={80} />
            <SkillBadge name="Entity Framework Core" level={80} />
            <SkillBadge name="C#" level={85} />
            <SkillBadge name="Java (Spring Boot)" level={85} />

            <SkillBadge name="React.js" level={70} />
            <SkillBadge name="TypeScript" level={80} />
            <SkillBadge name="JavaScript" level={80} />
            <SkillBadge name="SQL Server" level={60} />
            <SkillBadge name="MySQL" level={70} />
            <SkillBadge name="Azure" level={45} />
            <SkillBadge name="CI/CD" level={45} />
            <SkillBadge name="HTML/CSS" level={90} />
            <SkillBadge name="Bootstrap" level={85} />
            <SkillBadge name="MUI" level={85} />

            <SkillBadge name="Git" level={85} />
            <SkillBadge name="JIRA" level={55} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectRef} id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="WorkManagment System"
              description="Developed a comprehensive Work Management System to streamline employee task assignments, tracking, and performance reporting. The system includes role-based access, real-time dashboards, and daily work logging for efficient team coordination."
              tags={["ASP.NET Core", "Entity Framework", "SQL Server", "JWT", "Swagger", "React", "Fuse"]}
              image="/geo/chart.png"
              screenshots={["/geo/login.png",
                "/geo/worklog-navigation.png",
                "/geo/settings.png",
                "/geo/onboarding.png",
                "/geo/leaves.png"


              ]}
              demoUrl="http://wehr.co.in/"
              repoUrl="https://github.com/sahilnawab"
            />

 <ProjectCard
              title="NSS Web Solutions"
              description="NSS Web Solutions, a comprehensive platform for managing web development projects and landing page for clients."
              tags={["Next.js", "Landing Page", "UI/UX",]}
              image="/nss/nss-main.png"
              screenshots={["/nss/nss-main.png",
                "/nss/aboutus.png",
                "/nss/contact.png",
                "nss/techstack.png"
              ]}
              demoUrl="https://nss-web-solutions.vercel.app/"
              repoUrl="https://github.com/sahilnawab"
            />



 <ProjectCard
              title="Smash Bros Burger Shop"
              description="Developed Smash Bros Burger App, a modern web application for a burger shop featuring a landing page, interactive menu, and seamless food ordering via WhatsApp and online forms."
              tags={["Next.js", "Whatsapp Messaging", "UI/UX",]}
              image="/smashbros/Landingpage.png"
              screenshots={["/smashbros/Landingpage.png",
                "/smashbros/order.png",
                "/smashbros/ourstory.png",
              ]}
              demoUrl="http://wehr.co.in/"
              repoUrl="https://github.com/sahilnawab"
            />


            <ProjectCard
              title="Smart Interview Practice Platform"
              description="A full-stack platform that helps users practice coding and behavioral interview questions with AI-powered feedback."
              tags={["ASP.NET Core", "React", "Kafka", "Azure", "JWT", "Google PaLM AI", "EF Core"]}
              image="/smart-interview screen-shots/smart-interview-user.png"
              screenshots={[
                "/smart-interview screen-shots/smart-interview-home.png",
                "/smart-interview screen-shots/Screenshot 2025-06-09 173216.png",
                "/smart-interview screen-shots/smart-interview-question.png",
                "/smart-interview screen-shots/smart-interview-user.png",
              ]}
              demoUrl="https://github.com/sahilnawab/Smart-Interview-Practice-Platform"
              repoUrl="https://github.com/sahilnawab/Smart-Interview-Practice-Platform"
            />
            <ProjectCard
              title="Inspire Me App"
              description="A motivational quote management app with admin dashboard, role-based access, and PDF export functionality."
              tags={["ASP.NET Core MVC", "Entity Framework", "Azure SQL", "Identity", "Bootstrap"]}
              image="/inspire-me/login.png"
              screenshots={[
                "/inspire-me/home.png",
                "/inspire-me/login.png",
              ]}
              demoUrl="https://github.com/sahilnawab/InspireMe"
              repoUrl="https://github.com/sahilnawab/InspireMe"
            />

            {/* <ProjectCard
              title="Task Management System"
              description="Full-stack task management application with real-time updates and team collaboration features."
              tags={["React", "Node.js", "PostgreSQL", "Socket.io", "Material-UI"]}
              image="/placeholder.svg?height=400&width=600"
              screenshots={[
                "/smart-interview screen-shots/smart-interview-home.png",
                "/smart-interview screen-shots/Screenshot 2025-06-09 173216.png",
                "/smart-interview screen-shots/smart-interview-question.png",
                "/smart-interview screen-shots/smart-interview-user.png",
              ]}
              demoUrl="https://example.com"
              repoUrl="https://github.com/your-github-username"
            /> */}
            {/* <ProjectCard
              title="Cloud Deployment Pipeline"
              description="Automated CI/CD pipeline for deploying .NET applications to Azure with monitoring and logging."
              tags={["Azure DevOps", "Azure App Service", "Docker", "Application Insights"]}
              image="/placeholder.svg?height=400&width=600"
              screenshots={["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"]}
              demoUrl="https://example.com"
              repoUrl="https://github.com/your-github-username"
            /> */}
            <ProjectCard
              title="PortFolio Website"
              description="This portfolio website showcasing my projects and skills, built with modern web technologies."
              tags={["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]}
              image="Portfolio/my-portfolio.png"
              screenshots={[
                "Portfolio/my-portfolio.png",
                "Portfolio/skills-card.png",
                // "/placeholder.svg?height=600&width=800",
              ]}
              demoUrl="https://example.com"
              repoUrl="https://github.com/your-github-username"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">sahilnawab.india@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/sahilnawabindia</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/sahilnawab</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Phone (UK)</div>
                    <div className="font-medium">+44 7459 555328</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Phone (India)</div>
                    <div className="font-medium">+91 8200382872</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Available for freelance work and full-time opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Sahil</span>
              <span className="text-white">N</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">© 2024 Sahil Nawab. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/sahilnawab" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/sahilnawabindia" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>

            <Link href="mailto:sahilnawab.india@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
