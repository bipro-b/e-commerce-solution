import * as service from '../services/product.service.js';

export const create = async (req, res) => {
  try {
    const product = await service.createProduct({ ...req.body, sellerId: req.user.id });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const list = async (_req, res) => {
  const products = await service.getAllProducts();
  res.json(products);
};

export const sellerProducts = async (req, res) => {
  const products = await service.getSellerProducts(req.user.id);
  res.json(products);
};

export const update = async (req, res) => {
  const updated = await service.updateProduct(req.params.id, req.body);
  res.json(updated);
};

export const remove = async (req, res) => {
  await service.deleteProduct(req.params.id);
  res.json({ message: 'Deleted' });
};

export const approve = async (req, res) => {
  const product = await service.approveProduct(req.params.id);
  res.json(product);
};
