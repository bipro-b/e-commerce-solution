import express from 'express';
import  {register, login }  from '../controllers/auth.controller.js';
const router = express.Router();

console.log('Auth routes loaded');
router.post('/register', register);
router.post('/login', login);

export default router;
