import express from 'express';
import dotenv from 'dotenv';
import paymentRoutes from './routes/payment.route.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/payments', paymentRoutes);

app.get('/', (req, res) => res.send('Payment Service is running'));

export default app;