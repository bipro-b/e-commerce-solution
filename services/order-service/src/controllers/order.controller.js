import { createOrder, getOrdersByCustomer } from '../services/order.service.js';

export const createOrderHandler = async (req, res) => {
  try {
    const order = await createOrder(req.body, req.user);
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMyOrdersHandler = async (req, res) => {
  try {
    const orders = await getOrdersByCustomer(req.user.id);
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
