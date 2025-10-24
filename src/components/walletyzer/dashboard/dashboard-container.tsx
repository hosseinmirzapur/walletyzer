'use client'

import Navigation from '../navigation'
import WalletStats from './wallet-stats'
import TokenList from './token-list'
import NFTGallery from './nft-gallery'
import { toast } from 'sonner'
import { useWallet } from '@solana/wallet-adapter-react'

import { useAtom } from 'jotai'
import { selectedNetworkAtom, clusterAtom } from '@/lib/network-store'

import { useEffect, useState } from 'react'
import { Asset } from 'helius-sdk/types/das'
import DashboardHeader from './dashboard-header'

interface WalletData {
  solBalance: number
  tokens: Asset[]
  nfts: Asset[]
  tokensCount: number
  nftCount: number
  grandTotal: number
}

const DashboardContainer = () => {
  const [walletData, setWalletData] = useState<WalletData>({
    nftCount: 0,
    nfts: [],
    solBalance: 0,
    tokens: [],
    tokensCount: 0,
    grandTotal: 0,
  })
  const [loading, setLoading] = useState(false)

  const { connected, publicKey } = useWallet()

  const [selectedNetwork, setSelectedNetwork] = useAtom(selectedNetworkAtom)
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

  const fetchAllOwnerAssets = async (network: string, walletAddress: string) => {
    if (!connected) return
    setLoading(true)
    try {
      const response = await fetch(`/api/assets?network=${network}&walletAddress=${walletAddress}`)
      if (!response.ok) {
        throw new Error('Failed to fetch wallet data')
      }
      const parsedData = await response.json()
      setWalletData(parsedData)
    } catch (error) {
      console.error(error)
      toast.error('Failed to fetch wallet data', {
        description: 'There was an error loading your wallet information.',
      })
      setWalletData({
        nftCount: 0,
        nfts: [],
        solBalance: 0,
        tokens: [],
        tokensCount: 0,
        grandTotal: 0,
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAllOwnerAssets(selectedNetwork, publicKey?.toBase58() || '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNetwork, publicKey, connected])

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 pt-24 pb-12">
        <DashboardHeader
          connected={connected}
          selectedNetwork={selectedNetwork}
          publicKey={publicKey}
          setSelectedNetwork={setSelectedNetwork}
          copyAddress={copyAddress}
          openAddressOnExplorer={openAddressOnExplorer}
          onRefresh={() => fetchAllOwnerAssets(selectedNetwork, publicKey?.toBase58() || '')}
        />

        {connected && (
          <div className="space-y-8">
            <WalletStats
              stat={walletData}
              loading={loading}
              network={selectedNetwork}
              publicKey={publicKey}
              setLoading={setLoading}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <TokenList tokens={walletData.tokens} />
              <NFTGallery nfts={walletData.nfts} />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default DashboardContainer
