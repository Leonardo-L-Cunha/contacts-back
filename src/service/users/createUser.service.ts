import { Request, Response } from 'express';
import { UserTypeCreate, UserTypeReturn } from '../../interfaces/user.interface';
import { Repository } from 'typeorm';
import User from '../../entities/user.entities';
import AppDataSource from '../../data-source';
import { AppError } from '../../error';
import { UserSchemaReturn } from '../../schema/user.schema';

const createUserService = async(payload: UserTypeCreate): Promise<UserTypeReturn> => {
    const userRepository:Repository<User> = AppDataSource.getRepository(User)

    const verifyEmail:User | null = await  userRepository.findOne({
        where: {
            email:payload.email
        }
    })

    if(verifyEmail){
        throw new AppError('Email already Exists', 409)
    }

    const user = userRepository.create(payload)

    await userRepository.save(user)

    const returnUser = UserSchemaReturn.parse(user)

    return returnUser
}

export {
    createUserService
}