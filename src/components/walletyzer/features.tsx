'use client'

import { motion } from 'framer-motion'
import { Wallet, Image, TrendingUp, Shield, Zap, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Wallet,
    title: 'Wallet Connection',
    description: 'Connect your Solana wallet seamlessly with support for Phantom, Solflare, and more.',
  },
  {
    icon: TrendingUp,
    title: 'Balance Display',
    description: 'View your SOL balance and track your portfolio value in real-time.',
  },
  {
    icon: Image,
    title: 'Token Portfolio',
    description: 'See all your SPL tokens with detailed information and metadata.',
  },
  {
    icon: Shield,
    title: 'NFT Gallery',
    description: 'Display your NFT collection with beautiful thumbnails and details.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built with Next.js and optimized for blazing fast performance.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Works perfectly on desktop, tablet, and mobile devices.',
  },
]

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to <span className="gradient-text">Track Your Wallet</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive dashboard with all the features you need to manage and view your Solana assets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 rounded-2xl group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:glow-primary transition-all">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
