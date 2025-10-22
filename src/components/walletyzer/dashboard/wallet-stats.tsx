'use client'

import { motion } from 'framer-motion'
import { Asset } from 'helius-sdk/types/das'
import { Wallet, TrendingUp, Coins, Image as NftImage } from 'lucide-react'

// const stats = [
//   {
//     icon: Wallet,
//     label: 'SOL Balance',
//     value: '45.28',
//     change: '+12.5%',
//     positive: true,
//   },
//   {
//     icon: Coins,
//     label: 'Total Tokens',
//     value: '12',
//     change: '+2',
//     positive: true,
//   },
//   {
//     icon: Image,
//     label: 'NFTs Owned',
//     value: '8',
//     change: '+1',
//     positive: true,
//   },
//   {
//     icon: TrendingUp,
//     label: 'Portfolio Value',
//     value: '$2,847',
//     change: '+8.3%',
//     positive: true,
//   },
// ]

interface IProps {
  stat: {
    solBalance: number
    tokens: Asset[]
    nfts: Asset[]
    tokensCount: number
    nftCount: number
    grandTotal: number
  }
}

const WalletStats: React.FC<IProps> = ({ stat }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Sol Balance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 * 0.1 }}
        whileHover={{ scale: 1.02 }}
        className="glass-card p-6 rounded-2xl"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Wallet className="w-5 h-5 text-white" />
          </div>
          {/* <span className={`text-sm font-medium ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
            {stat.change}
          </span> */}
        </div>
        <div className="text-3xl font-bold mb-1">{stat.solBalance}</div>
        <div className="text-sm text-muted-foreground">SOL Balance</div>
      </motion.div>

      {/* Total Tokens   */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 * 0.1 }}
        whileHover={{ scale: 1.02 }}
        className="glass-card p-6 rounded-2xl"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Coins className="w-5 h-5 text-white" />
          </div>
          {/* <span className={`text-sm font-medium ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
            {stat.change}
          </span> */}
        </div>
        <div className="text-3xl font-bold mb-1">{stat.nftCount + stat.tokensCount}</div>
        <div className="text-sm text-muted-foreground">Total Tokens</div>
      </motion.div>

      {/* NFTs Owned */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 3 * 0.1 }}
        whileHover={{ scale: 1.02 }}
        className="glass-card p-6 rounded-2xl"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <NftImage className="w-5 h-5 text-white" />
          </div>
          {/* <span className={`text-sm font-medium ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
            {stat.change}
          </span> */}
        </div>
        <div className="text-3xl font-bold mb-1">{stat.nftCount}</div>
        <div className="text-sm text-muted-foreground">NFTs Owned</div>
      </motion.div>

      {/* Portfolio Value */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 4 * 0.1 }}
        whileHover={{ scale: 1.02 }}
        className="glass-card p-6 rounded-2xl"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          {/* <span className={`text-sm font-medium ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
            {stat.change}
          </span> */}
        </div>
        <div className="text-3xl font-bold mb-1">{stat.grandTotal}</div>
        <div className="text-sm text-muted-foreground">Portfolio Value</div>
      </motion.div>
    </div>
  )
}

export default WalletStats
