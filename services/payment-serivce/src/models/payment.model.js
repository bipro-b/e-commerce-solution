// src/models/payment.model.js
import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'usd' },
  status: { type: String, enum: ['pending', 'success', 'failed'], default: 'pending' },
  stripePaymentId: { type: String },
}, { timestamps: true });

export const Payment = mongoose.model('Payment', paymentSchema);
