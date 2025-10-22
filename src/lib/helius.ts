import 'server-only'

import { createHelius } from 'helius-sdk'

const HELIUS_API_KEY = process.env.HELIUS_API_KEY as string

const mainnetHelius = createHelius({
  apiKey: HELIUS_API_KEY,
  network: 'mainnet',
})

const devnetHelius = createHelius({
  apiKey: HELIUS_API_KEY,
  network: 'devnet',
})

export const helius = (network: string) => {
  switch (network) {
    case 'mainnet':
      return mainnetHelius
    case 'devnet':
      return devnetHelius
    default:
      throw new Error(`Unsupported network: ${network}`)
  }
}
