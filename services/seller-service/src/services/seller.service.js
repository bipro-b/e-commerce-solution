import { Seller } from "../models/seller.model.js";

export const requestSellerAccount = async (data) => {
  const exists = await Seller.findOne({ userId: data.userId });
  if (exists) throw new Error('Request already exists or account active.');
  return await Seller.create(data);
};

export const getSellerByUserId = async (userId) => {
  return await Seller.findOne({ userId });
};

export const updateSellerProfile = async (userId, data) => {
  return await Seller.findOneAndUpdate({ userId }, data, { new: true });
};

export const getAllSellers = async () => {
  return await Seller.find();
};

export const approveSeller = async (id) => {
  return await Seller.findByIdAndUpdate({_id:id}, { status: 'approved' }, { new: true });
};

export const rejectSeller = async (id) => {
  return await Seller.findByIdAndUpdate({_id:id}, { status: 'rejected' }, { new: true });
};
