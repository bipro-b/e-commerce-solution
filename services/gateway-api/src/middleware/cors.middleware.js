import cors from 'cors';

export const corsMiddleware = cors({
  origin: '*', // Change for security in production
  methods: ['GET', 'POST', 'PUT', 'PATCH','DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
});
