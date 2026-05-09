import { LRUCache } from "lru-cache";

const tokenCache = new LRUCache<string, number[]>({
  max: 5000,
  ttl: 60 * 1000,
});

export function rateLimit(key: string, limit = 5): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const timestamps = tokenCache.get(key) ?? [];
  const recent = timestamps.filter((t) => now - t < windowMs);
  if (recent.length >= limit) return false;
  tokenCache.set(key, [...recent, now]);
  return true;
}

