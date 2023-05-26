import { Router } from 'express';
import { createUserController } from '../controllers/user.controllers';

const usersRoutes:Router = Router()

usersRoutes.post('',createUserController)

export default usersRoutes