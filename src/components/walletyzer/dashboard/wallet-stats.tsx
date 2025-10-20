'use client'

import { motion } from 'framer-motion'
import { Wallet, TrendingUp, Coins, Image } from 'lucide-react'

const stats = [
  {
    icon: Wallet,
    label: 'SOL Balance',
    value: '45.28',
    change: '+12.5%',
    positive: true,
  },
  {
    icon: Coins,
    label: 'Total Tokens',
    value: '12',
    change: '+2',
    positive: true,
  },
  {
    icon: Image,
    label: 'NFTs Owned',
    value: '8',
    change: '+1',
    positive: true,
  },
  {
    icon: TrendingUp,
    label: 'Portfolio Value',
    value: '$2,847',
    change: '+8.3%',
    positive: true,
  },
]

const WalletStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-6 rounded-2xl"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className={`text-sm font-medium ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                {stat.change}
              </span>
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default WalletStats
