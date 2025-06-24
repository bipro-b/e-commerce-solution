// src/controllers/payment.controller.js
import { createPaymentIntent, confirmPaymentStatus } from '../services/payment.service.js';

export const initiatePayment = async (req, res) => {
  const { orderId, amount } = req.body;

  if (!orderId || !amount) return res.status(400).json({ error: 'orderId and amount required' });

  try {
    const clientSecret = await createPaymentIntent({ orderId, amount });
    res.status(200).json({ clientSecret });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const handleWebhook = async (req, res) => {
  const event = req.body;

  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    await confirmPaymentStatus(paymentIntent.id, 'success');
  } else if (event.type === 'payment_intent.payment_failed') {
    const paymentIntent = event.data.object;
    await confirmPaymentStatus(paymentIntent.id, 'failed');
  }

  res.status(200).send('Webhook received');
};
