import * as React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Facebook, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+92 328 1744019",
    description: "WhatsApp available 24/7",
    action: "tel:+923281744019"
  },
  {
    icon: Mail,
    title: "Email",
    value: "dynamodigitalmarketing2107@gmail.com",
    description: "We'll respond within 24 hours",
    action: "mailto:dynamodigitalmarketing2107@gmail.com"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Pakistan",
    description: "Serving clients worldwide",
    action: null
  }
]

const socialLinks = [
  {
    icon: Instagram,
    name: "Instagram",
    url: "https://www.instagram.com/dynamo.digitalmarketing/?igsh=MXUxcTg1cHh6NHRjNQ%3D%3D#",
    color: "from-pink-500 to-orange-500"
  },
  {
    icon: Facebook,
    name: "Facebook", 
    url: "https://www.facebook.com/people/Dynamo-Digital-Marketing/61556771291294/?rdid=HLReGKIgrSj0ucS0&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19SXWad6tf%2F",
    color: "from-blue-600 to-blue-500"
  },
  {
    icon: MessageCircle,
    name: "WhatsApp",
    url: "https://wa.me/923281744019",
    color: "from-green-500 to-green-600"
  }
]

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 relative">
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
            <Send className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Get In Touch</span>
          </motion.div>
          
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8">
            Let's Create Something <span className="bg-gradient-heading bg-clip-text text-transparent">Amazing Together</span>
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ready to transform your digital presence? We're here to help bring your vision to life. Contact us today for a free consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                          {info.action ? (
                            <a 
                              href={info.action}
                              className="text-primary hover:text-primary-glow font-medium transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{info.value}</p>
                          )}
                          <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 300 1234567"
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="graphic-design">Graphic Design</option>
                        <option value="video-editing">Video Editing</option>
                        <option value="seo-marketing">SEO & Digital Marketing</option>
                        <option value="app-development">App Development</option>
                        <option value="content-writing">Content Writing</option>
                        <option value="animation">2D/3D Animation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements..."
                      rows={6}
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-primary p-8 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Contact us directly on WhatsApp for instant support and quick quotes.
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-primary"
                onClick={() => window.open("https://wa.me/923281744019", "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}