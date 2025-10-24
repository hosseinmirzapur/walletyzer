'use client'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { PublicKey } from '@solana/web3.js'
import { motion } from 'framer-motion'
import { Copy, ExternalLink, RefreshCw } from 'lucide-react'

interface IProps {
  connected: boolean
  publicKey: PublicKey | null
  copyAddress: () => void
  openAddressOnExplorer: () => void
  selectedNetwork: string
  setSelectedNetwork: (network: string) => void
  onRefresh: () => Promise<void>
}

const DashboardHeader: React.FC<IProps> = ({
  connected,
  publicKey,
  selectedNetwork,
  copyAddress,
  openAddressOnExplorer,
  setSelectedNetwork,
  onRefresh,
}) => {
  return (
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
                {/* <DropdownMenuItem onClick={() => setSelectedNetwork('testnet')}>Testnet</DropdownMenuItem>
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
                    </div> */}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onRefresh()}
              disabled={!connected}
              className="h-8 w-8 p-0"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          </>
        ) : (
          <WalletMultiButton />
        )}
      </div>
    </motion.div>
  )
}

export default DashboardHeader
