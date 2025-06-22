import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true },
  storeName: { type: String, required: true },
  description: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' }
}, { timestamps: true });

export const Seller = mongoose.model('Seller',sellerSchema);

