import express from 'express';
const router = express.Router();
import UserController from '../controllers/user.controller.js';

router.post('/user', UserController.saveUser);
router.get('/user/:id', UserController.getUser);
router.get('/users', UserController.getUsers);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);

export default router;