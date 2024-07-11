import getData from '../controller/note/getData.js';
import postData from '../controller/note/postData.js';
import deleteData from '../controller/note/deleteData.js';
import updateData from '../controller/note/updateData.js';
import {Router} from 'express';

const router=Router();

router.route('/').post(postData).get(getData).delete(deleteData);
router.route('/:id').patch(updateData);
export default router;