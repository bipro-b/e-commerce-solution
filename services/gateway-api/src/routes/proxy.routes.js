import express from 'express';
import dotenv from 'dotenv';
import { createServiceProxy } from '../utils/proxy.js';

dotenv.config();
const router = express.Router();

router.use('/auth-service', createServiceProxy('auth', process.env.AUTH_SERVICE_URL));
router.use('/product-service', createServiceProxy('products', process.env.PRODUCT_SERVICE_URL));
router.use('/user-service', createServiceProxy('users', process.env.USER_SERVICE_URL));
router.use('/order-service', createServiceProxy('orders', process.env.ORDER_SERVICE_URL));

export default router;
