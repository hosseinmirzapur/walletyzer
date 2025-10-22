'use client'

import { motion } from 'framer-motion'
import { Asset } from 'helius-sdk/types/das'

interface IProps {
  tokens: Asset[]
}

const TokenList: React.FC<IProps> = ({ tokens }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="glass-card p-6 rounded-2xl"
    >
      <h2 className="text-2xl font-bold mb-6">Token Portfolio</h2>
      <div className="space-y-4">
        {tokens.length === 0 ? (
          <p className="text-muted-foreground">No tokens found.</p>
        ) : (
          tokens.map((token, index) => {
            const name = token.content?.metadata?.name || 'Unknown Token'
            const symbol = token.content?.metadata?.symbol || 'TOKEN'
            const balance = token.token_info?.balance || 0
            const pricePerToken = token.token_info?.price_info?.price_per_token || 0
            const value = pricePerToken > 0 ? `$${(balance * pricePerToken).toFixed(2)}` : `${balance} ${symbol}`
            const logo = token.content?.links?.image || '🪙' // Default emoji if no image

            return (
              <motion.div
                key={token.id || index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center justify-between p-4 rounded-xl bg-muted/20 hover:bg-muted/30 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{logo}</div>
                  <div>
                    <div className="font-semibold">{name}</div>
                    <div className="text-sm text-muted-foreground">
                      {balance} {symbol}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{value}</div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    {/* No change data available */}
                  </div>
                </div>
              </motion.div>
            )
          })
        )}
      </div>
    </motion.div>
  )
}

export default TokenList
