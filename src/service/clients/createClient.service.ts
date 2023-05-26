import { Repository } from "typeorm";
import { ClientTypeCreate, ClientTypeReturn, IclientCreate } from "../../interfaces/client.interface";
import Client from "../../entities/client.entities";
import AppDataSource from "../../data-source";
import { AppError } from "../../error";
import { ClientSchemaReturn } from "../../schema/client.schema";

const createClientService = async(paylod:IclientCreate): Promise<ClientTypeReturn> =>{
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const verifyEmail:Client | null = await clientRepository.findOne({
        where:{
            email:paylod.email
        }
    })

    if(verifyEmail){
        throw new AppError('Email already exists', 409)
    }

    const client:Client = clientRepository.create(paylod)

    await clientRepository.save(client)

    const returnClient = ClientSchemaReturn.parse(client)

    return returnClient
}

export {
    createClientService
}