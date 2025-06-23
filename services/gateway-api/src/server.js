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

}));

// Proxy to /products → http://localhost:5002/
app.use('/api/product-service', createProxyMiddleware({
  target: 'http://localhost:5002',
  changeOrigin: true,
}));

app.use('/api/seller-service', createProxyMiddleware({
  target: 'http://localhost:5006',
  changeOrigin: true,
}));

app.use('/api/order-service', createProxyMiddleware({
  target: 'http://localhost:5003',
  changeOrigin: true,
}));

app.use('/api/payment-service', createProxyMiddleware({
  target: 'http://localhost:5004',
  changeOrigin: true,
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