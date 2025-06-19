import express from 'express';
import dotenv from 'dotenv';
import proxyRoutes from './routes/proxy.routes.js';
import { corsMiddleware } from './middleware/cors.middleware.js';
import { gatewayAuth } from './middleware/auth.middleware.js';

dotenv.config();
const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use(gatewayAuth);

// Proxy routes
app.use('/api', proxyRoutes);

app.get('/', (_req, res) => {
  res.send('Gateway API is running');
});

export default app;
