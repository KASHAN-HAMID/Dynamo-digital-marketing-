import * as React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Eye,
  Maximize2,
  Globe,
  Palette
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    category: "Web Development",
    description: "A modern and responsive portfolio built with React and Framer Motion.",
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
    description: "Elegant Agency site with online system.",
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
    description: "Personal portfolio of a designer.",
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
  // Add more if needed...
];

const categories = ["All", "Web Development", "Graphic Design", "Digital Marketing"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [overlayVisibleId, setOverlayVisibleId] = React.useState<number | null>(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const openFullscreen = (src: string) => {
    const imgWindow = window.open('', '_blank');
    imgWindow?.document.write(`<img src="${src}" style="width:100%;height:auto;" />`);
  };

  const toggleOverlay = (id: number) => {
    if (isMobile) {
      setOverlayVisibleId((prev) => (prev === id ? null : id));
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore websites, designs, and campaigns built with care.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              onClick={() => setActiveCategory(cat)}
              className="capitalize"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card
                className="bg-card/50 backdrop-blur-md hover:shadow-xl border-border/40"
                onClick={() => toggleOverlay(project.id)}
              >
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />

                  <div
                    className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex items-center justify-center space-x-4 ${
                      isMobile
                        ? overlayVisibleId === project.id
                          ? "opacity-100"
                          : "opacity-0"
                        : "group-hover:opacity-100 opacity-0"
                    }`}
                  >
                    {project.url && (
                      <Button size="icon" variant="glass" onClick={() => window.open(project.url, "_blank")}>
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

                <CardContent className="p-4">
                  <Badge className="mb-2">{project.category}</Badge>
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs bg-muted px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
