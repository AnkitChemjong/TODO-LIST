import createUser from '../controller/user/createUser.js';
import logUser from '../controller/user/logUser.js';
import {Router} from 'express';
import upload from '../controller/upImage.js';

const userRouter=Router();

userRouter.route('/').post(upload.single('image'),createUser)
userRouter.post('/log',logUser);

export default userRouter;