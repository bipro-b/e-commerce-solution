import express from 'express';
import { createOrderHandler, getMyOrdersHandler } from '../controllers/order.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.use(authenticate);

router.post('/', createOrderHandler);
router.get('/:id/order', getMyOrdersHandler);

export default router;
