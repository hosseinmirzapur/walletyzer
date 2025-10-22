import { helius } from '@/lib/helius'
import { GetAssetResponseList } from 'helius-sdk/types/das'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const network = searchParams.get('network')
  const walletAddress = searchParams.get('walletAddress')
  const page = searchParams.get('page')
  const limit = searchParams.get('limit')

  if (!network || !walletAddress) {
    return Response.json({ error: 'Missing required parameters: network and walletAddress' }, { status: 400 })
  }

  if (network !== 'mainnet' && network !== 'devnet') {
    return Response.json({ error: 'Unsupported network. Only mainnet and devnet are supported.' }, { status: 400 })
  }

  try {
    const assets: GetAssetResponseList = await helius(network).getAssetsByOwner({
      ownerAddress: walletAddress,
      page: parseInt(page || '1', 10),
      limit: parseInt(limit || '50', 10),
      displayOptions: {
        showCollectionMetadata: true,
        showGrandTotal: true,
        showNativeBalance: true,
        showZeroBalance: false,
      },
    })

    const solBalance = assets.nativeBalance ? assets.nativeBalance.lamports / 1e9 : 0
    const grandTotal = assets.grand_total || 0
    const tokens = assets.items.filter((a) => a.interface === 'FungibleToken' && a.token_info?.balance !== 0)
    const nfts = assets.items.filter((a) => a.interface === 'Metadata')

    return Response.json({
      solBalance,
      tokens,
      nfts,
      tokensCount: tokens.length,
      nftCount: nfts.length,
      grandTotal,
    })
  } catch (error) {
    console.error(error)
    return Response.json({ error: 'Failed to fetch assets from Helius API.' }, { status: 500 })
  }
}
