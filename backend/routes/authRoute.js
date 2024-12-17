import express from 'express';
import { createUser, loginUserCtrl, getAllUsers, getSingleUser, deleteUser } from '../controller/userCtrl.js'
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUserCtrl);
router.get('/all-users',getAllUsers);
router.get('/:id', getSingleUser)
router.delete('/:id', deleteUser);

export default router;