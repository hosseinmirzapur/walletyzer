'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown } from 'lucide-react'

const tokens = [
  {
    name: 'Solana',
    symbol: 'SOL',
    balance: '45.28',
    value: '$1,847.32',
    change: 12.5,
    logo: '🟣',
  },
  {
    name: 'USD Coin',
    symbol: 'USDC',
    balance: '500.00',
    value: '$500.00',
    change: 0.1,
    logo: '🔵',
  },
  {
    name: 'Serum',
    symbol: 'SRM',
    balance: '125.50',
    value: '$287.15',
    change: -3.2,
    logo: '🟢',
  },
  {
    name: 'Raydium',
    symbol: 'RAY',
    balance: '50.00',
    value: '$212.50',
    change: 8.7,
    logo: '🟡',
  },
]

const TokenList = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="glass-card p-6 rounded-2xl"
    >
      <h2 className="text-2xl font-bold mb-6">Token Portfolio</h2>
      <div className="space-y-4">
        {tokens.map((token, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.02, x: 5 }}
            className="flex items-center justify-between p-4 rounded-xl bg-muted/20 hover:bg-muted/30 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="text-3xl">{token.logo}</div>
              <div>
                <div className="font-semibold">{token.name}</div>
                <div className="text-sm text-muted-foreground">
                  {token.balance} {token.symbol}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold">{token.value}</div>
              <div
                className={`flex items-center gap-1 text-sm ${token.change >= 0 ? 'text-green-400' : 'text-red-400'}`}
              >
                {token.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {Math.abs(token.change)}%
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default TokenList
