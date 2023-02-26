import { checkUserData } from '../middlewares';
import { usersController } from '../controllers';
import { Router } from 'express';

const usersRouter = Router();

usersRouter.post('/user', checkUserData, usersController.post);

usersRouter.get('/users', usersController.getAll);

export default usersRouter;
