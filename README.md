# Walletyzer — Solana Wallet Activity Dashboard

A fast, privacy-aware dashboard that surfaces wallet activity (transactions, token moves, NFT events, memos, program interactions) with real-time alerts & timelines, searchable/filterable history, and aggregated analytics.

## Product Goal

Build a comprehensive Solana wallet activity dashboard with:
- **Real-time alerts & timelines**
- **Searchable / filterable history**
- **Aggregated analytics** (spend patterns, counterparties, token flows)
- **Light on-chain program integration** (Anchor IDLs)
- **Single-user free tier + premium analytics & alerts**

**Success Metrics**: Reliable real-time updates, 99.9% uptime for core data pipeline, 1000 weekly active users within first 3 months, 3-5% conversion to paid tier.

## Technology Stack

- **Frontend**: Next.js + TypeScript + Tailwind CSS
- **Blockchain**: Anchor framework for on-chain workspace
- **Data & Real-time**: Helius for transaction parsing, websockets, and webhooks
- **Backend**: Serverless functions (Vercel/Cloud Run/Render)
- **Database**: Postgres (Supabase/Neon) + Redis for caching
- **Authentication**: Solana Wallet Adapter

## Roadmap Overview

### Phase 0 — Decide & Prepare (2-4 days)
**Status**: In Progress

**Deliverables**:
- [x] Product spec (one-pager): target users, top 6 features, pricing model
- [x] Choose template: `web3js-next-tailwind` (full scaffold + Anchor)
- [ ] Create accounts: Helius, GitHub, Vercel, Phantom/Backpack for dev

### Phase 1 — Architecture & Data Design (1 week)
**Status**: Pending

**Deliverables**:
- [ ] System diagram: frontend ↔ backend ↔ Helius (websockets/webhooks) ↔ DB (Postgres) ↔ cache (Redis) ↔ Anchor localnet
- [ ] Data model: wallets table, tracked_addresses, events (tx, token_transfer, nft_event), user_settings, alerts
- [ ] API contract: endpoints for search, history, aggregates, alerts

**Key Decisions**:
- Real-time ingestion: Helius websockets/webhooks for streaming parsed txs
- Storage: Postgres for history + Redis for hot caching & rate limits

### Phase 2 — MVP Feature Priority (2-3 days)
**Status**: Pending

**MVP Features** (in order):
1. [ ] Wallet connect + view (Solana Wallet Adapter)
2. [ ] Historical transaction feed (last 90 days) using Helius Enhanced Transactions
3. [ ] Real-time timeline (websocket/webhook-driven)
4. [ ] Simple analytics: total inflow/outflow, top counterparties, token balances
5. [ ] Alerts: basic email/push for large moves or new NFT mints
6. [ ] Export CSV, shareable permalink for wallet reports

### Phase 3 — DevOps & Infrastructure (3-5 days)
**Status**: Pending

**Setup**:
- [ ] Frontend host: Vercel for Next.js
- [ ] Backend: Serverless functions for endpoints
- [ ] Ingestion: Helius webhooks (preferred over persistent websockets)
- [ ] Database: Postgres + Redis (managed)
- [ ] CI/CD: GitHub Actions for tests, linting, deployment
- [ ] Secrets management: Vercel env vars

### Phase 4 — QA, Testing & On-chain Simulation (2 weeks)
**Status**: Pending

**Testing Checklist**:
- [ ] Unit tests for backend parsing/normalization
- [ ] Integration tests simulating Helius webhook payloads
- [ ] Localnet Anchor tests for on-chain program interactions
- [ ] Load tests for API traffic and webhook bursts
- [ ] Security review: API keys, rate limits, CORS

### Phase 5 — Private Beta (2-4 weeks)
**Status**: Pending

**Beta Launch**:
- [ ] Invite 50-200 power users (Discords, Solana Twitter/X, Hackers)
- [ ] Collect qualitative feedback on confusion points and missing analytics
- [ ] Track: DAU, API calls per user, median latency, error rate

### Phase 6 — Polish & Public Launch (2-4 weeks)
**Status**: Pending

**Final Polish**:
- [ ] UX improvements: onboarding flows, tooltips, mobile responsiveness
- [ ] Payment flow integration (Stripe)
- [ ] Premium features: advanced alerts, longer history, CSV exports
- [ ] Landing page with clear CTAs and pricing
- [ ] Public launch across X/Twitter, Reddit r/solana, Solana Discords

### Phase 7 — Scale & Product Expansion (Ongoing)
**Status**: Pending

**Future Features**:
- [ ] Watchlists & portfolio-style dashboards
- [ ] Cross-wallet aggregation (group wallets)
- [ ] Program/event insights (token minting clusters)
- [ ] Deeper NFT analysis
- [ ] Team features / multi-seat orgs / API access

## Key Metrics & KPIs

**Reliability & Performance**:
- Webhook processing success rate > 99.5%
- Event → UI latency < 2s for realtime events
- 99.9% uptime for core data pipeline

**User Engagement**:
- DAU/MAU tracking
- Average session length
- 7-day retention rate

**Business Metrics**:
- Trial→paid conversion: 3-7%
- Cost efficiency: $ per 1k users in Helius credits/infrastructure

## Immediate Next Steps

**Priority Actions** (Complete Today):
1. [ ] Create Helius account and obtain API key
2. [ ] Set up project repository structure
3. [ ] Draft detailed one-page product specification
4. [ ] Create system architecture diagram
5. [ ] Schedule 2 weeks of focused development time

## Development Setup

### Prerequisites
```bash
# Install dependencies
pnpm install

# Set up Anchor program
cd anchor
pnpm anchor keys sync
pnpm anchor-build
```

### Development Commands
```bash
# Start local development
pnpm dev

# Run tests
pnpm anchor-test

# Deploy to devnet
pnpm anchor deploy --provider.cluster devnet

# Build for production
pnpm build
```

### Local Development
```bash
# Start Anchor localnet with program deployed
pnpm anchor-localnet
```

## External References

- **[Helius Enhanced Transactions API](https://www.helius.dev/docs/enhanced-transactions)** - Transaction parsing and real-time data
- **[Helius Websockets](https://www.helius.dev/docs/api-reference/rpc/websocket-methods)** - Real-time streaming
- **[Solana Wallet Adapter](https://solana.com/developers/courses/intro-to-solana/interact-with-wallets)** - Wallet integration
- **[Vercel Next.js Guide](https://vercel.com/docs/frameworks/full-stack/nextjs)** - Deployment platform
- **[Anchor Local Development](https://www.anchor-lang.com/docs/quickstart/local)** - Smart contract development

## Security & Privacy

- **No private key storage** - Wallet connect requests signatures only
- **User address handling** - Public on-chain data treated with privacy considerations
- **Data export/deletion** - Users can export and delete their tracked addresses
- **API key protection** - Server-only usage with quarterly rotation

## Risk Mitigation

- **Helius rate limits**: Implement caching, event aggregation, prefer webhooks over polling
- **Real-time expectations**: Document SLAs and show "last updated" timestamps
- **Parser maintenance**: Rely on Helius enhanced transactions to reduce maintenance burden

## Support

For questions or issues, please refer to the documentation or create an issue in the project repository.
