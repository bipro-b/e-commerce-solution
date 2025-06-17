import express from 'express';
import * as controller from '../controllers/product.controller.js';
import { authorize } from '../middlewares/role.middleware.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.use(authenticate);

router.post('/', authorize('seller'), controller.create);
router.get('/', controller.list);
router.get('/seller', authorize('seller'), controller.sellerProducts);
router.put('/:id', authorize('seller'), controller.update);
router.delete('/:id', authorize('seller'), controller.remove);
router.put('/approve/:id', authorize('admin'), controller.approve);

export default router;
