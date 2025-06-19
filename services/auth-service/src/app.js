import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/auth', authRoutes);

app.get('/', (req, res) => res.send('Auth Service is running'));

export default app;