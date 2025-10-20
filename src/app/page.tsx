import Features from '@/components/walletyzer/features'
import Hero from '@/components/walletyzer/hero'
import Navigation from '@/components/walletyzer/navigation'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
    </div>
  )
}
