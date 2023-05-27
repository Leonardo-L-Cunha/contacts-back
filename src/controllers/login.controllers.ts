import {Request, Response} from "express"
import { LoginTypeRequest } from "../interfaces/login.interface"
import { loginService } from "../service/login/login.service"


const loginController = async(req:Request, res:Response):Promise<Response> =>{
    const data: LoginTypeRequest = req.body
    const login = await loginService(data)
    
    return res.status(200).json({token:login})
}

export {
    loginController
}