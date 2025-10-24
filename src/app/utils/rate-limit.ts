import redis from '@/lib/redis'

const WINDOW = 60 // seconds
const MAX_REQUESTS = 5

export async function rateLimitedFetch(url: string, options?: RequestInit) {
  const key = 'backend:rate-limit' // one global limiter for all backend API calls

  const count = await redis.incr(key)

  if (count === 1) {
    await redis.expire(key, WINDOW)
  }

  if (count > MAX_REQUESTS) {
    throw new Error('Backend API rate limit exceeded')
  }

  return fetch(url, options)
}

export async function checkRateLimit(ip: string) {
  const key = `api:rate-limit:${ip}`
  const count = await redis.incr(key)

  if (count === 1) {
    await redis.expire(key, WINDOW)
  }

  if (count > MAX_REQUESTS) {
    return false // Rate limit exceeded
  }

  return true // Within limit
}

export function getClientIP(req: Request): string {
  // Try to get IP from various headers
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }

  const realIP = req.headers.get('x-real-ip')
  if (realIP) {
    return realIP
  }

  const clientIP = req.headers.get('x-client-ip')
  if (clientIP) {
    return clientIP
  }

  // Fallback to a default or throw error
  return 'unknown'
}
