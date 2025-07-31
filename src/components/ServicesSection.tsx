import * as React from "react"
import { motion } from "framer-motion"
import { Globe, Palette, Video, TrendingUp, Smartphone, FileText, Layers3, Rocket, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern Frameworks"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Creative visual solutions that capture your brand essence and communicate your message effectively.",
    features: ["Brand Identity", "Logo Design", "Print Materials", "Digital Graphics"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video production and editing services that bring your stories to life with cinematic quality.",
    features: ["Motion Graphics", "Color Grading", "Sound Design", "Visual Effects"],
    color: "from-red-500 to-orange-500"
  },
  {
    icon: TrendingUp,
    title: "SEO & Digital Marketing",
    description: "Data-driven marketing strategies that boost your online presence and drive qualified traffic to your business.",
    features: ["Search Optimization", "Social Media", "PPC Campaigns", "Analytics"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Layers3,
    title: "2D/3D Animation",
    description: "Engaging animations and 3D models that captivate audiences and enhance your digital content.",
    features: ["Character Animation", "3D Modeling", "Motion Design", "Interactive Content"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications designed for seamless user experiences across all devices.",
    features: ["iOS & Android", "Cross-Platform", "UI/UX Design", "App Store Optimization"],
    color: "from-teal-500 to-blue-500"
  },
  {
    icon: FileText,
    title: "Content Writing",
    description: "Compelling content that resonates with your audience and drives engagement across all digital platforms.",
    features: ["SEO Content", "Blog Writing", "Copywriting", "Technical Writing"],
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Rocket,
    title: "Project Deployment",
    description: "Seamless deployment and hosting solutions ensuring your projects go live smoothly and stay online reliably.",
    features: ["Cloud Hosting", "Domain Setup", "SSL Certificates", "Performance Monitoring"],
    color: "from-pink-500 to-red-500"
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6"
          >
            <Rocket className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Our Services</span>
          </motion.div>
          
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8">
            <span className="bg-gradient-heading bg-clip-text text-transparent">
              Complete Digital Solutions
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end digital services that transform your ideas into powerful, results-driven solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <CardHeader className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group/btn"
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <span className="relative z-10">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1 relative z-10" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-primary p-8 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Let's discuss your project and create something amazing together. Our team is ready to bring your vision to life.
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-primary"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: "smooth" })}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}