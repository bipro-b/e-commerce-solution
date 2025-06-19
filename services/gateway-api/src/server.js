import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 8000;

// Proxy to /auth → http://localhost:5000/
app.use('/api/auth-service', createProxyMiddleware({
  target: 'http://localhost:5000',
  changeOrigin: true,
  // pathRewrite: { '^/auth': '' },
}));

// Proxy to /products → http://localhost:5002/
app.use('/api/product-service', createProxyMiddleware({
  target: 'http://localhost:5002',
  changeOrigin: true,
  // pathRewrite: { '^/products': '' }, 
}));

// Proxy to /users → http://localhost:3003/
app.use('/users', createProxyMiddleware({
  target: 'http://localhost:3003',
  changeOrigin: true,
  // pathRewrite: { '^/users': '' },
}));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});



/* import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Gateway running on port ${PORT}`);
});
 */