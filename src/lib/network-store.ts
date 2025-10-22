import { atom } from 'jotai'

export const selectedNetworkAtom = atom<string>('mainnet')

export const customRpcAtom = atom<string>('')

// Derived atom for cluster

export const clusterAtom = atom((get) => {
  const selectedNetwork = get(selectedNetworkAtom)

  switch (selectedNetwork) {
    case 'mainnet':
      return 'mainnet-beta'

    case 'devnet':
      return 'devnet'

    case 'testnet':
      return 'testnet'

    default:
      return 'devnet'
  }
})
