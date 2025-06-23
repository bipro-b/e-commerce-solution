// src/services/payment.service.js
import { Payment } from '../models/payment.model.js';
import { stripe } from '../config/stripe.js';

export const createPaymentIntent = async ({ orderId, amount }) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100, // cents
    currency: 'usd',
    metadata: { orderId },
  });

  const payment = new Payment({
    orderId,
    amount,
    stripePaymentId: paymentIntent.id
  });

  await payment.save();

  return paymentIntent.client_secret;
};

export const confirmPaymentStatus = async (stripePaymentId, status) => {
  return await Payment.findOneAndUpdate(
    { stripePaymentId },
    { status },
    { new: true }
  );
};
