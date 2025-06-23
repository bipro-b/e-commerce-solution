import { Order } from '../models/order.model.js';

export const createOrder = async (data, user) => {
  const total = data.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return await Order.create({
    customerId: user.id,
    sellerId: data.sellerId,
    items: data.items,
    totalAmount: total
  });
};

export const getOrdersByCustomer = async (customerId) => {
  return await Order.find({ customerId });
};
