# Walletyzer — Simple Solana Wallet Dashboard

A clean, beginner-friendly dashboard for viewing your Solana wallet contents and basic information. Built with Anchor and Next.js for learning purposes.

## Project Overview

This is a **beginner to intermediate level** Solana project that focuses on:
- **Interactive wallet dashboard** - View your tokens, NFTs, and balance with real-time updates
- **Airdrop functionality** - Request test SOL for development and testing
- **Professional UI/UX** - Clean design with loading states and error handling
- **Full-stack integration** - Next.js API routes with rate limiting and external APIs
- **Educational focus** - Learn Anchor + frontend + backend integration

Perfect for developers wanting to learn comprehensive Solana development from frontend to backend!

## Features

### ✅ Current Features
- **Wallet Connection** - Connect your Solana wallet (Phantom, Solflare, etc.)
- **Balance Display** - View your SOL balance with real-time updates
- **Token Portfolio** - See all SPL tokens in your wallet with detailed metadata
- **NFT Gallery** - Display NFTs with rich metadata and collection information
- **Account Overview** - Comprehensive wallet information and stats
- **Airdrop Functionality** - Request test SOL on devnet for development and testing
- **Loading Skeletons** - Professional loading states with shimmer animations
- **Refresh Button** - Manual refresh of wallet data with one click
- **Rate Limiting** - API protection against abuse using Redis-based rate limiting
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Error Handling** - Robust error handling with user-friendly messages

### 🚀 Future Enhancements (Optional)
- Token price information
- Portfolio value tracking with real-time prices
- Simple filtering and search for tokens/NFTs
- Export wallet summary as PDF or CSV
- Advanced analytics and portfolio insights

## Technology Stack

- **Frontend**: Next.js + TypeScript + Tailwind CSS + Framer Motion
- **Blockchain**: Anchor framework + Solana Web3.js
- **Wallet Integration**: Solana Wallet Adapter
- **Styling**: Tailwind CSS components with custom glassmorphism effects
- **API Routes**: Next.js API routes for data fetching and airdrop functionality
- **Rate Limiting**: Redis-based rate limiting for API protection
- **External Services**: Helius API for enhanced Solana RPC access
- **State Management**: Jotai for network configuration

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
- **Data Fetching** - Getting wallet and token information via APIs
- **UI Development** - Building clean, responsive interfaces with loading states
- **API Development** - Creating Next.js API routes for backend functionality
- **Rate Limiting** - Implementing Redis-based rate limiting for API protection
- **Error Handling** - Robust error handling and user feedback
- **External APIs** - Integrating with services like Helius for enhanced Solana access

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

### Dashboard Features
- **Account Display** - Shows wallet address and basic info
- **Balance Display** - Displays SOL balance prominently with real-time updates
- **Token Management** - Fetches and displays SPL tokens with metadata
- **NFT Gallery** - Shows NFTs with rich metadata and collection information

### Loading and UX
- **Skeleton Loading** - Professional shimmer animations during data fetching
- **Refresh Button** - Manual refresh of wallet data with icon-only design
- **Error Handling** - Toast notifications and graceful error recovery

### API and Backend
- **Assets API** - `/api/assets` for fetching wallet contents
- **Airdrop API** - `/api/airdrop` for requesting test SOL on devnet
- **Rate Limiting** - Per-IP rate limiting using Redis to prevent abuse
- **External Integration** - Helius API for enhanced Solana RPC access

## API Routes and Backend Features

While this project started as a pure frontend application, we've added Next.js API routes for:
- **Enhanced Data Fetching** - API routes for wallet assets and airdrop functionality
- **Rate Limiting** - Redis-based protection against API abuse
- **Error Handling** - Comprehensive error handling with user-friendly messages
- **External Integration** - Seamless integration with Helius API for enhanced Solana access

This demonstrates how to build full-stack Solana applications using:
- **Client-side data fetching** - Direct RPC calls and API routes
- **Anchor programs** - For any smart contract needs
- **Local development** - Anchor's localnet for testing
- **Frontend state management** - React hooks and context
- **API development** - Next.js API routes for backend functionality

## Tips for Beginners

1. **Start with wallet connection** - Get this working first
2. **Use localnet for testing** - No need for devnet initially
3. **Focus on one feature at a time** - Build incrementally
4. **Use the Anchor TypeScript client** - It's generated for you
5. **Test with small amounts** - Use devnet when ready for real testing
6. **Implement loading states** - Always provide feedback during async operations
7. **Handle errors gracefully** - Use try-catch and user-friendly messages
8. **Rate limit your APIs** - Protect against abuse and ensure fair usage
9. **Use external APIs wisely** - Services like Helius enhance functionality
10. **Keep it simple** - Maintain clean, readable code for learning

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
- Portfolio tracking with real-time price data
- NFT marketplace features
- DeFi protocol integration
- Advanced analytics and portfolio insights
- Transaction history and activity feeds

This enhanced version provides a solid foundation for building more complex Solana applications. Keep experimenting and learning! 🚀
