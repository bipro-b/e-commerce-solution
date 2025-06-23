import express from 'express';
import dotenv from 'dotenv';
import orderRoutes from './routes/order.route.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/orders', orderRoutes);

app.get('/', (req, res) => res.send('Order Service is running'));

export default app;