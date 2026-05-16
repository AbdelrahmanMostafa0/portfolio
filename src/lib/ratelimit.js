// In-memory rate limiter — suitable for single-instance / serverless with warm functions
const store = new Map();

/**
 * @param {string} key  - usually the request IP
 * @param {number} limit - max requests allowed in window
 * @param {number} windowMs - window duration in milliseconds
 */
export function rateLimit(key, limit = 3, windowMs = 15 * 60 * 1000) {
  const now = Date.now();
  const record = store.get(key);

  if (!record || now > record.resetTime) {
    store.set(key, { count: 1, resetTime: now + windowMs });
    return { allowed: true, remaining: limit - 1 };
  }

  if (record.count >= limit) {
    const retryAfter = Math.ceil((record.resetTime - now) / 1000);
    return { allowed: false, remaining: 0, retryAfter };
  }

  record.count += 1;
  return { allowed: true, remaining: limit - record.count };
}
