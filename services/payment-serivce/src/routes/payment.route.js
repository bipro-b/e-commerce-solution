// src/routes/payment.route.js
import express from 'express';
import { initiatePayment, handleWebhook } from '../controllers/payment.controller.js';

const router = express.Router();

router.post('/pay', initiatePayment);
router.post('/webhook', express.raw({ type: 'application/json' }), handleWebhook);

export default router;
