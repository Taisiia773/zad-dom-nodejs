import { Router } from 'express';
import commentController from './commentController';

const router:Router = Router();

router.get('/all', commentController.getComments);
router.post('/create', commentController.createComment);
router.get('/:id', commentController.getCommentById);

export default router;