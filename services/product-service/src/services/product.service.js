import { Product } from "../models/product.model.js";

export const createProduct = async (data) => {
  return await Product.create(data);
};

export const getAllProducts = async () => {
  return await Product.find({ isApproved: true });
};

export const getSellerProducts = async (sellerId) => {
  return await Product.find({ sellerId });
};

export const getProductById = async (id) => {
  return await Product.findById({_id:id});
};

export const updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

export const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

export const approveProduct = async (id) => {
  return await Product.findByIdAndUpdate(id, { isApproved: true }, { new: true });
};
