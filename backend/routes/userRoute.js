import createUser from '../controller/user/createUser.js';
import logUser from '../controller/user/logUser.js';
import {Router} from 'express';

const userRouter=Router();

userRouter.route('/').post(createUser)
userRouter.post('/log',logUser);

export default userRouter;