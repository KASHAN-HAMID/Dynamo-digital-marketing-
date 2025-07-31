import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Play, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary backdrop-blur-sm"
          >
            <Zap className="w-5 h-5 mr-3" />
            <span className="text-base font-medium">Digital Excellence Redefined</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight"
          >
           <span
    className="bg-gradient-to-r from-blue-500 via-blue-400 to-gray-400 bg-clip-text text-transparent"
  >
    DYNAMO
  </span>
            <br />
            <span className="text-foreground text-5xl md:text-6xl lg:text-7xl">Digital Marketing</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Transforming ideas into powerful digital experiences. We deliver cutting-edge solutions in web development, design, and digital marketing that drive real results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button 
              variant="hero" 
              size="xl" 
              className="group text-lg px-12 py-6"
              onClick={scrollToContact}
            >
              Start Your Project
              <ArrowRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="group text-lg px-12 py-6"
              onClick={scrollToProjects}
            >
              <Play className="w-6 h-6 mr-3" />
              View Our Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center cursor-pointer"
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: "smooth" })}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}