import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

let rateLimitClient: Ratelimit | null = null;
let newsletterRateLimitClient: Ratelimit | null = null;

function getRateLimitClient() {
  if (rateLimitClient) {
    return rateLimitClient;
  }

  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!redisUrl || !redisToken) {
    return null;
  }

  const redis = new Redis({
    url: redisUrl,
    token: redisToken,
  });

  rateLimitClient = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "10 m"),
    analytics: true,
    prefix: "travel-asambe:enquiry",
  });

  return rateLimitClient;
}

function getNewsletterRateLimitClient() {
  if (newsletterRateLimitClient) {
    return newsletterRateLimitClient;
  }

  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!redisUrl || !redisToken) {
    return null;
  }

  const redis = new Redis({
    url: redisUrl,
    token: redisToken,
  });

  newsletterRateLimitClient = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "10 m"),
    analytics: true,
    prefix: "travel-asambe:newsletter",
  });

  return newsletterRateLimitClient;
}

export const enquiryRateLimit = {
  async limit(key: string) {
    const client = getRateLimitClient();

    if (!client) {
      return {
        success: true,
        limit: 5,
        remaining: 5,
        reset: Date.now() + 600000,
      };
    }

    return client.limit(key);
  },
};

export const newsletterRateLimit = {
  async limit(key: string) {
    const client = getNewsletterRateLimitClient();

    if (!client) {
      return {
        success: true,
        limit: 5,
        remaining: 5,
        reset: Date.now() + 600000,
      };
    }

    return client.limit(key);
  },
};