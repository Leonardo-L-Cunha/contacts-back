import { Request, Response } from 'express';
import { UserTypeCreate } from '../interfaces/user.interface';
import { createUserService } from '../service/users/createUser.service';

const createUserController = async(req: Request, res: Response):Promise<Response> =>{
    const payload:UserTypeCreate = req.body

    const user = await createUserService(payload)

    return res.status(201).send(user)
}

export {
    createUserController
}