'use client'

import { motion } from 'framer-motion'
import { Asset } from 'helius-sdk/types/das'

interface IProps {
  nfts: Asset[]
}

const NFTGallery: React.FC<IProps> = ({ nfts }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="glass-card p-6 rounded-2xl"
    >
      <h2 className="text-2xl font-bold mb-6">NFT Collection</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {nfts.length === 0 ? (
          <p className="text-muted-foreground col-span-full">No NFTs found.</p>
        ) : (
          nfts.map((nft, index) => {
            const name = nft.content?.metadata?.name || 'Unknown NFT'
            const collection =
              nft.grouping?.find((g) => g.group_key === 'collection')?.group_value || 'Unknown Collection'
            const image = nft.content?.links?.image || '🖼️' // Default emoji

            return (
              <motion.div
                key={nft.id || index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="glass-card p-4 rounded-xl cursor-pointer group"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center text-6xl mb-3 group-hover:glow-primary transition-all">
                  {image}
                </div>
                <div className="text-sm font-semibold truncate">{name}</div>
                <div className="text-xs text-muted-foreground truncate">{collection}</div>
              </motion.div>
            )
          })
        )}
      </div>
    </motion.div>
  )
}

export default NFTGallery
