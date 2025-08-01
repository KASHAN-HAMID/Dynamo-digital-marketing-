import * as React from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Play, Globe, Palette, Video, Eye, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "Personal POrtfolio",
    category: "Web Development",
    description: "A modern and responsive portfolio built with React and Framer Motion. .",
    image: "/p6.png",
    technologies: ["React", "Node.js", "Tailwind"],
    type: "web",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    url: "https://kashan-hamid-portfolio.vercel.app/"
  },
  {
    id: 2,
    title: "Agency Website",
    category: "Web Development",
    description: "Elegant Agency site with online  system.",
    image: "/p1.png",
    technologies: ["Next.js", "Tailwind", "Supabase"],
    type: "web",
    icon: Globe,
    color: "from-green-500 to-emerald-500",
    url: "https://boldhue.vercel.app/"
  },
  {
    id: 3,
    title: "Company Website",
    category: "Web Development",
    description: "Study Abroad Consultants Website.",
    image: "/p2.png",
    technologies: ["React", "Tailwind CSS", "Supabase"],
    type: "web",
    icon: Globe,
    color: "from-indigo-500 to-purple-500",
    url: "https://www.thevisionconsultants.com/"
  },
  {
    id: 4,
    title: "Personal Portfolio",
    category: "Web Development",
    description: "Personal portfolio of a designer ",
    image: "/p3.png",
    technologies: ["React.js", "Framer motion"],
    type: "web",
    icon: Globe,
    color: "from-yellow-500 to-orange-500",
    url: "https://ahmeds-portfolio-ten.vercel.app/"
  },
  {
    id: 5,
    title: "Brand Identity Design",
    category: "Graphic Design",
    description: "Logo, business card, and branding assets.",
    image: "/p4.jpg",
    technologies: ["Photoshop", "Illustrator"],
    type: "design",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    viewable: true
  },
  {
    id: 6,
    title: "Corporate Brochure",
    category: "Graphic Design",
    description: "Tri-fold corporate brochure design.",
    image: "/p5.jpg",
    technologies: ["InDesign", "Photoshop"],
    type: "design",
    icon: Palette,
    color: "from-indigo-500 to-purple-500",
    viewable: true
  },
  {
    id: 7,
    title: "Standee",
    category: "Graphic Design",
    description: "Collection of promotional posters for events.",
    image: "/p7.jpg",
    technologies: ["Illustrator", "Figma"],
    type: "design",
    icon: Palette,
    color: "from-pink-500 to-red-500",
    viewable: true
  },
  {
    id: 8,
    title: "SEO Campaign Report",
    category: "Digital Marketing",
    description: "Complete SEO audit and strategy report.",
    image: "/IMG-20250731-WA0082.jpg",
    technologies: ["SEMRush", "Ahrefs"],
    type: "pdf",
    icon: Eye,
    color: "from-green-500 to-blue-500",
    url: "/d1.pdf"
  },
  {
    id: 9,
    title: "Social Media Strategy",
    category: "Digital Marketing",
    description: "Social media content plan and analytics.",
    image: "/IMG-20250731-WA0080.jpg",
    technologies: ["Meta Business", "Canva"],
    type: "pdf",
    icon: Eye,
    color: "from-yellow-400 to-pink-500",
    url: "/d2.pdf"
  }
]

const categories = ["All", "Web Development", "Graphic Design", "Video Editing", "Digital Marketing"]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = React.useState("All")
  const [hoveredProject, setHoveredProject] = React.useState<number | null>(null)

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const openFullscreen = (src: string) => {
    const imgWindow = window.open('', '_blank')
    imgWindow?.document.write(`<img src="${src}" style="width:100%;height:auto;"/>`)
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }} className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
            <Eye className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Our Work</span>
          </motion.div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8">
            <span className="bg-gradient-heading bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that showcase our expertise and creativity across different digital disciplines.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button key={category} variant={activeCategory === category ? "default" : "outline"} onClick={() => setActiveCategory(category)} className="transition-all duration-300">
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} whileHover={{ y: -10 }} onHoverStart={() => setHoveredProject(project.id)} onHoverEnd={() => setHoveredProject(null)} className="group cursor-pointer">
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full absolute inset-0"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                      <project.icon className="w-16 h-16 text-white/80" />
                    </div>
                  )}

                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'} flex items-center justify-center space-x-4`}>
                    {project.url && (
                      <Button size="icon" variant="glass" onClick={() => window.open(project.url, '_blank')}>
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                    {project.viewable && (
                      <Button size="icon" variant="glass" onClick={() => openFullscreen(project.image)}>
                        <Maximize2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>

                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }} className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
