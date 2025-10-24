import { Connection, PublicKey } from '@solana/web3.js'
import { checkRateLimit, getClientIP } from '@/app/utils/rate-limit'

const HELIUS_API_KEY = process.env.HELIUS_API_KEY as string

export async function POST(req: Request) {
  const ip = getClientIP(req)

  // Check rate limit
  const isAllowed = await checkRateLimit(ip)
  if (!isAllowed) {
    return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), {
      status: 429,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const body = await req.json()
    const { pubkey, amount } = body

    if (!pubkey || !amount) {
      return new Response(JSON.stringify({ error: 'Pubkey and amount are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const publicKey = new PublicKey(pubkey)
    const lamports = Number(amount)

    if (isNaN(lamports) || lamports <= 0) {
      return new Response(JSON.stringify({ error: 'Amount must be a positive number' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const connection = new Connection(`https://api.devnet.solana.com?api-key=${HELIUS_API_KEY}`)
    const signature = await connection.requestAirdrop(publicKey, lamports)

    // Confirm the transaction
    await connection.confirmTransaction(signature, 'confirmed')

    return new Response(JSON.stringify({ signature }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error: unknown) {
    console.error('Airdrop request failed:', error)

    // Type guard to check if error has code and message
    const err = error as { code?: number; message?: string }

    // Handle rate limit error
    if (err.code === 429 || err.message?.includes('429')) {
      return new Response(
        JSON.stringify({
          error: 'Airdrop limit reached. Please visit https://faucet.solana.com for alternative test SOL sources.',
        }),
        {
          status: 429,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }

    // Handle other RPC errors
    if (err.code) {
      return new Response(
        JSON.stringify({
          error: `Airdrop failed: ${err.message || 'Unknown RPC error'}`,
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }

    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
