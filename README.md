# Walletyzer — Simple Solana Wallet Dashboard

A clean, beginner-friendly dashboard for viewing your Solana wallet contents and basic information. Built with Anchor and Next.js for learning purposes.

## Project Overview

This is a **beginner to intermediate level** Solana project that focuses on:
- **Read-only wallet dashboard** - View your tokens, NFTs, and balance
- **No transactions** - Just display what's in your wallet
- **Simple, clean UI** - Easy to understand and navigate
- **Educational focus** - Learn Anchor + frontend integration

Perfect for developers wanting to learn Solana development without complex backend infrastructure.

## Features

### ✅ Current Features
- **Wallet Connection** - Connect your Solana wallet (Phantom, Solflare, etc.)
- **Balance Display** - View your SOL balance
- **Token Portfolio** - See all SPL tokens in your wallet
- **NFT Gallery** - Display NFTs with metadata
- **Account Overview** - Basic wallet information and stats
- **Responsive Design** - Works on desktop and mobile

### 🚀 Future Enhancements (Optional)
- Token price information
- Portfolio value tracking
- Simple filtering and search
- Export wallet summary

## Technology Stack

- **Frontend**: Next.js + TypeScript + Tailwind CSS
- **Blockchain**: Anchor framework
- **Wallet Integration**: Solana Wallet Adapter
- **Styling**: Tailwind CSS components
- **No Backend Required** - Pure frontend + blockchain

## Getting Started

### Prerequisites
- Basic knowledge of React/Next.js
- A Solana wallet (Phantom recommended)
- Node.js and pnpm installed

### Installation

1. **Clone and setup**:
```bash
# Install dependencies
pnpm install

# Set up Anchor program
cd anchor
pnpm anchor keys sync
pnpm anchor-build
```

2. **Start development**:
```bash
# Start the Next.js app
pnpm dev

# In another terminal, start Anchor localnet (optional)
pnpm anchor-localnet
```

3. **Open your browser**:
Navigate to `http://localhost:3000` and connect your wallet!

## Project Structure

```
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/          # Reusable UI components
│   │   ├── account/         # Wallet-related components
│   │   ├── ui/              # Basic UI components
│   │   └── ...
│   └── lib/                 # Utilities and configurations
└── anchor/
    ├── programs/            # Solana programs (Rust)
    └── src/                 # Generated TypeScript client
```

## Learning Objectives

This project helps you learn:
- **Anchor Basics** - Writing simple Solana programs
- **Frontend Integration** - Connecting React to blockchain
- **Wallet Connection** - Using Solana Wallet Adapter
- **Data Fetching** - Getting wallet and token information
- **UI Development** - Building clean, responsive interfaces

## Development Commands

```bash
# Development
pnpm dev                    # Start development server

# Anchor Development
cd anchor
pnpm anchor keys sync       # Sync program keys
pnpm anchor-build          # Build the program
pnpm anchor-localnet       # Start local Solana validator
pnpm anchor-test           # Run tests

# Production
pnpm build                 # Build for production
pnpm start                 # Start production server
```

## Key Components

### Wallet Connection
- Uses `@solana/wallet-adapter` for easy wallet integration
- Supports multiple wallet providers
- Clean connection status UI

### Account Display
- Shows wallet address and basic info
- Displays SOL balance prominently
- Lists all token holdings

### Token Management
- Fetches and displays SPL tokens
- Shows token balances and metadata
- Clean token list interface

## No Backend Needed!

This project demonstrates how to build useful Solana applications using:
- **Client-side data fetching** - Direct RPC calls
- **Anchor programs** - For any smart contract needs
- **Local development** - Anchor's localnet for testing
- **Frontend state management** - React hooks and context

## Tips for Beginners

1. **Start with wallet connection** - Get this working first
2. **Use localnet for testing** - No need for devnet initially
3. **Focus on one feature at a time** - Build incrementally
4. **Use the Anchor TypeScript client** - It's generated for you
5. **Test with small amounts** - Use devnet when ready for real testing

## Contributing

This is a learning project, so feel free to:
- Add new dashboard features
- Improve the UI/UX
- Add educational comments
- Fix bugs or optimize code

## License

MIT License - feel free to use for your own learning projects!

## Next Steps

After getting comfortable with this dashboard, you might want to explore:
- Adding token swap functionality
- Portfolio tracking with price data
- NFT marketplace features
- DeFi protocol integration

But for now, focus on mastering the basics with this simple, clean wallet dashboard! 🚀
