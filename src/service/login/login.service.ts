import { Repository } from 'typeorm';
import User from '../../entities/user.entities';
import AppDataSource from '../../data-source';
import { compare } from 'bcryptjs';
import jtw  from 'jsonwebtoken';
import 'dotenv/config'
import { LoginTypeRequest } from '../../interfaces/login.interface';
import { AppError } from '../../error';


const loginService = async(payload:LoginTypeRequest):Promise<string> =>{
    const userRepository:Repository<User> = AppDataSource.getRepository(User)

    const findUser:User | null = await userRepository.findOne({
        where:{
            email: payload.email
        }
    })

    if(!findUser){
        throw new AppError('Invalid credentiais', 401)
    }

    const passwordMath:boolean = await compare(payload.password, findUser.password)

    if(!passwordMath){
        throw new AppError('Invalid credentiais',401)
    }

    const token:string = jtw.sign(
        {
            email:payload.email
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: '24h',
            subject:findUser.id.toString()
        }
    )
   
    return token
}

export {
    loginService
}