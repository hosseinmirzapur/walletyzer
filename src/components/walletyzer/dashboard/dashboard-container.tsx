'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Copy, ExternalLink } from 'lucide-react'
import Navigation from '../navigation'
import WalletStats from './wallet-stats'
import TokenList from './token-list'
import NFTGallery from './nft-gallery'
import { toast } from 'sonner'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

import { useAtom } from 'jotai'
import { selectedNetworkAtom, customRpcAtom, clusterAtom } from '@/lib/network-store'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Input } from '@/components/ui/input'

const DashboardContainer = () => {
  const { connected, publicKey } = useWallet()

  const [selectedNetwork, setSelectedNetwork] = useAtom(selectedNetworkAtom)

  const [customRpc, setCustomRpc] = useAtom(customRpcAtom)

  const [cluster] = useAtom(clusterAtom)

  const copyAddress = () => {
    if (!publicKey) return
    navigator.clipboard.writeText(publicKey.toBase58())
    toast.success('Address copied!', {
      description: 'Wallet address copied to clipboard',
    })
  }

  const openAddressOnExplorer = () => {
    if (!publicKey) return
    const walletAddress = publicKey.toBase58()
    const explorerUrl = `https://explorer.solana.com/address/${walletAddress}?cluster=${cluster}`
    window.open(explorerUrl, '_blank')
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your <span className="gradient-text">Wallet Dashboard</span>
          </h1>
          <div className="flex items-center gap-3 flex-wrap">
            {connected ? (
              <>
                <div className="glass-card px-4 py-2 rounded-lg flex items-center gap-2">
                  <span className="text-muted-foreground">Address:</span>
                  <span className="font-mono font-semibold truncate max-w-20">{publicKey?.toBase58()}</span>
                  <Button size="sm" variant="ghost" onClick={copyAddress} className="h-6 w-6 p-0">
                    <Copy className="w-3 h-3" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-6 w-6 p-0" onClick={openAddressOnExplorer}>
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="glass-card px-4 py-2 rounded-lg cursor-pointer">
                      Network:{' '}
                      {selectedNetwork === 'custom'
                        ? 'Custom'
                        : selectedNetwork.charAt(0).toUpperCase() + selectedNetwork.slice(1)}
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setSelectedNetwork('mainnet')}>Mainnet</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedNetwork('devnet')}>Devnet</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedNetwork('testnet')}>Testnet</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <div className="p-2">
                      <Input
                        placeholder="Custom RPC URL"
                        value={customRpc}
                        onChange={(e) => setCustomRpc(e.target.value)}
                      />
                      <Button size="sm" onClick={() => setSelectedNetwork('custom')} className="mt-1">
                        Set Custom
                      </Button>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <WalletMultiButton />
            )}
          </div>
        </motion.div>

        {connected && (
          <div className="space-y-8">
            <WalletStats />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <TokenList />
              <NFTGallery />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default DashboardContainer
