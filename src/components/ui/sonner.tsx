'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner, ToasterProps } from 'sonner'
import { cn } from '@/lib/utils'

const Toaster = ({ className, ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className={cn(
        'toaster group',
        '[var(--normal-bg):hsl(var(--popover))]',
        '[var(--normal-text):hsl(var(--popover-foreground))]',
        '[var(--normal-border):hsl(var(--border))]',
        className,
      )}
      {...props}
    />
  )
}

export { Toaster }
