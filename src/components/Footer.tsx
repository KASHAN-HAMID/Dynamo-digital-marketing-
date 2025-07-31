import * as React from "react"
import { motion } from "framer-motion"
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" }
]

const services = [
  "Web Development",
  "Graphic Design", 
  "Video Editing",
  "SEO & Marketing",
  "App Development",
  "Content Writing",
  "2D/3D Animation",
  "Project Deployment"
]

const socialLinks = [
  {
    icon: Instagram,
    name: "Instagram",
    url: "https://www.instagram.com/dynamo.digitalmarketing/?igsh=MXUxcTg1cHh6NHRjNQ%3D%3D#"
  },
  {
    icon: Facebook,
    name: "Facebook",
    url: "https://www.facebook.com/people/Dynamo-Digital-Marketing/61556771291294/?rdid=HLReGKIgrSj0ucS0&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19SXWad6tf%2F"
  },
  {
    icon: MessageCircle,
    name: "WhatsApp",
    url: "https://wa.me/923281744019"
  }
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-card/30 backdrop-blur-sm border-t border-border/50">
      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -2 }}
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground shadow-glow hover:shadow-glow transition-all duration-300"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">D</span>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  DYNAMO
                </span>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  Digital Marketing
                </div>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Transforming ideas into powerful digital experiences. We deliver cutting-edge solutions that drive real results for businesses worldwide.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-gradient-primary flex items-center justify-center text-muted-foreground hover:text-primary-foreground transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ 
                        behavior: "smooth" 
                      })
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+923281744019"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    +92 328 1744019
                  </a>
                  <div className="text-xs text-muted-foreground/70">WhatsApp Available</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:dynamodigitalmarketing2107@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
                  >
                    dynamodigitalmarketing2107@gmail.com
                  </a>
                  <div className="text-xs text-muted-foreground/70">24h Response Time</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-muted-foreground text-sm">Pakistan</span>
                  <div className="text-xs text-muted-foreground/70">Serving Worldwide</div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="border-t border-border/50 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Dynamo Digital Marketing. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </footer>
  )
}