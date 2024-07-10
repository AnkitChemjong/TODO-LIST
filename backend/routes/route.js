import getData from '../controller/getData.js';
import postData from '../controller/postData.js';
import deleteData from '../controller/deleteData.js';
import updateData from '../controller/updateData.js';
import {Router} from 'express';

const router=Router();

router.route('/').post(postData).get(getData).delete(deleteData);
router.route('/:id').patch(updateData);
export default router;