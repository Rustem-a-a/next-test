import {RateLimiter} from "limiter";

// ADD LIMITERS CREATED ABOVE TO API PATHS

export const getLimiter = new RateLimiter({
    tokensPerInterval:4,
    interval:"min",
    fireImmediately:true
})

export const restapiLimiter = new RateLimiter({
    tokensPerInterval:4,
    interval:"min",
    fireImmediately:true
})
