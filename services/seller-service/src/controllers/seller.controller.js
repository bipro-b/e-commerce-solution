import { approveSeller, getAllSellers, getSellerByUserId, rejectSeller, requestSellerAccount, updateSellerProfile } from "../services/seller.service.js";

export const requestAccount = async (req, res) => {
  try {
    const seller = await requestSellerAccount({
      ...req.body,
      userId: req.user.id
    });
    res.status(201).json(seller);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const profile = async (req, res) => {
  const seller = await getSellerByUserId(req.user.id);
  res.json(seller);
};

export const update = async (req, res) => {
  const updated = await updateSellerProfile(req.user.id, req.body);
  res.json(updated);
};

export const allSellers = async (_req, res) => {
  const sellers = await getAllSellers();
  res.json(sellers);
};

export const approve = async (req, res) => {
  const seller = await approveSeller(req.params.id);
  res.json(seller);
};

export const reject = async (req, res) => {
  const seller = await rejectSeller(req.params.id);
  res.json(seller);
};
