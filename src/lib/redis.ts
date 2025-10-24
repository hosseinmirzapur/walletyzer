import { createClient } from 'redis'

const redisUrl = process.env.REDIS_URL as string

const redis = await createClient({
  url: redisUrl,
}).connect()

export default redis
