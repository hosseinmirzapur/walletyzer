'use client'

import { motion } from 'framer-motion'

const nfts = [
  {
    name: 'Degen Ape #1234',
    collection: 'Degen Ape Academy',
    image: '🦍',
  },
  {
    name: 'Sol Punk #5678',
    collection: 'Sol Punks',
    image: '👾',
  },
  {
    name: 'Okay Bear #9012',
    collection: 'Okay Bears',
    image: '🐻',
  },
  {
    name: 'y00t #3456',
    collection: 'y00ts',
    image: '🎭',
  },
]

const NFTGallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="glass-card p-6 rounded-2xl"
    >
      <h2 className="text-2xl font-bold mb-6">NFT Collection</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {nfts.map((nft, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="glass-card p-4 rounded-xl cursor-pointer group"
          >
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center text-6xl mb-3 group-hover:glow-primary transition-all">
              {nft.image}
            </div>
            <div className="text-sm font-semibold truncate">{nft.name}</div>
            <div className="text-xs text-muted-foreground truncate">{nft.collection}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default NFTGallery
