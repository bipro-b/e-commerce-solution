import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/product.route.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/products', productRoutes);
app.get('/', (_req, res) => res.send('Product Service Running'));

export default app;
