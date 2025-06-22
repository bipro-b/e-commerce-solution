import express from 'express';
import * as controller from '../controllers/seller.controller.js';
import { authorize } from '../middlewares/role.middleware.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const router = express.Router();
router.use(authenticate);

router.post('/request', authorize('seller'), controller.requestAccount);
router.get('/me', authorize('seller'), controller.profile);
router.put('/me', authorize('seller'), controller.update);

router.get('/', authorize('admin'), controller.allSellers);
router.put('/:id/approve', authorize('admin'), controller.approve);
router.put('/:id/reject', authorize('admin'), controller.reject);

export default router;
