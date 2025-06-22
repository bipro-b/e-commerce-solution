import express from 'express';
import dotenv from 'dotenv';
import sellerRoutes from './routes/seller.routes.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/sellers', sellerRoutes);

app.get('/', (req, res) => res.send('seller Service is running'));

export default app;