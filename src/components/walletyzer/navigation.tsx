'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Wallet, LayoutDashboard, Home } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const pathname = usePathname()

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  ]

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Walletyzer</span>
          </Link>

          <div className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.path
              const Icon = item.icon

              return (
                <Link key={item.path} href={item.path}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
                    <Button
                      variant={isActive ? 'default' : 'ghost'}
                      className={`gap-2 ${
                        isActive
                          ? 'bg-gradient-to-r from-primary to-secondary text-white'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </Button>
                  </motion.div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
