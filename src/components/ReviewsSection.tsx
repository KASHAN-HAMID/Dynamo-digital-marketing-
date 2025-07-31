import * as React from "react"
import { motion } from "framer-motion"

const reviewImages = [
  "/review1.jpg",
  "/review2.jpg",
  "/review3.jpg",
  "/review4.jpg"
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
  What Our{" "}
  <span
    className="bg-gradient-to-r from-blue-500 via-blue-400 to-gray-400 bg-clip-text text-transparent"
  >
    Clients Say
  </span>
</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            See what our happy clients are saying about their experiences with us.
          </p>
        </motion.div>

        {/* Seamless infinite slider */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex space-x-6"
            style={{ width: "max-content" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear"
            }}
          >
            {[...reviewImages, ...reviewImages].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Client Review ${i + 1}`}
                className="w-80 h-auto rounded-lg shadow-lg object-cover"
                draggable={false}
              />
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Want to be our <span className="bg-gradient-primary bg-clip-text text-transparent">Next Success Story?</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let’s work together to grow your brand and build something amazing.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:shadow-glow transition-all duration-300"
            >
              Start Your Project Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}