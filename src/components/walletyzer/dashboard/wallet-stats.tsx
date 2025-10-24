'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Asset } from 'helius-sdk/types/das'
import { Wallet, TrendingUp, Coins, Image as NftImage } from 'lucide-react'
import { PublicKey } from '@solana/web3.js'
import { toast } from 'sonner'
import { Dispatch } from 'react'

interface IProps {
  stat: {
    solBalance: number
    tokens: Asset[]
    nfts: Asset[]
    tokensCount: number
    nftCount: number
    grandTotal: number
  }
  loading: boolean
  network: string
  publicKey: PublicKey | null
  setLoading: Dispatch<React.SetStateAction<boolean>>
}

const WalletStats: React.FC<IProps> = ({ stat, network, loading, publicKey, setLoading }) => {
  const handleAirdrop = async () => {
    if (!publicKey) {
      toast.error('No wallet connected')
      return
    }

    try {
      setLoading(true)
      const response = await fetch('/api/airdrop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pubkey: publicKey.toBase58(), amount: 1e9 }), // 1 SOL = 1e9 lamports
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Airdrop successful', { description: `Signature: ${data.signature}` })
      } else {
        toast.error(data.error || 'Airdrop failed')
      }
    } catch (error: unknown) {
      console.log(error)
      toast.error('Airdrop failed')
    } finally {
      setLoading(false)
    }
  }

  const SkeletonCard = ({ delay }: { delay: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="glass-card p-6 rounded-2xl"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-gray-200 animate-pulse"></div>
        <div className="bg-gray-200 animate-pulse rounded h-8 w-24"></div>
      </div>
      <div className="text-3xl font-bold mb-1 bg-gray-200 animate-pulse rounded h-8 w-16"></div>
      <div className="text-sm text-muted-foreground bg-gray-200 animate-pulse rounded h-4 w-20"></div>
    </motion.div>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Sol Balance */}
      {loading ? (
        <SkeletonCard delay={1 * 0.1} />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="glass-card p-6 rounded-2xl relative"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="text-3xl font-bold mb-1">{stat.solBalance}</div>
          <div className="text-sm text-muted-foreground">SOL Balance</div>
          {network === 'devnet' && (
            <Button
              variant="default"
              size="sm"
              className="absolute top-4 right-4"
              onClick={handleAirdrop}
              disabled={!publicKey}
            >
              Request Airdrop
            </Button>
          )}
        </motion.div>
      )}

      {/* Total Tokens */}
      {loading ? (
        <SkeletonCard delay={2 * 0.1} />
      ) : (
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
          </div>
          <div className="text-3xl font-bold mb-1">{stat.nftCount + stat.tokensCount}</div>
          <div className="text-sm text-muted-foreground">Total Tokens</div>
        </motion.div>
      )}

      {/* NFTs Owned */}
      {loading ? (
        <SkeletonCard delay={3 * 0.1} />
      ) : (
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
          </div>
          <div className="text-3xl font-bold mb-1">{stat.nftCount}</div>
          <div className="text-sm text-muted-foreground">NFTs Owned</div>
        </motion.div>
      )}

      {/* Portfolio Value */}
      {loading ? (
        <SkeletonCard delay={4 * 0.1} />
      ) : (
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
          </div>
          <div className="text-3xl font-bold mb-1">Not Specified Yet.</div>
          <div className="text-sm text-muted-foreground">Portfolio Value</div>
        </motion.div>
      )}
    </div>
  )
}

export default WalletStats
