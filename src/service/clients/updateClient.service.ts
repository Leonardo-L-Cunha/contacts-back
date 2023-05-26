import { Repository } from 'typeorm';
import { ClientTypeReturn, ClientTypeUpdate } from '../../interfaces/client.interface';
import Client from '../../entities/client.entities';
import AppDataSource from '../../data-source';
import { AppError } from '../../error';
import { ClientSchemaReturn } from '../../schema/client.schema';

const updateClientService = async(payload: ClientTypeUpdate, clientId: number): Promise<ClientTypeReturn> =>{
    const clientRepository:Repository<Client> = AppDataSource.getRepository(Client)

    const findClient: Client | null = await clientRepository.findOneBy({id:clientId})

    if(!findClient){
        throw new AppError('Client not found',404)
    }

    const updatedClient:Client = clientRepository.create({
        ...findClient,
        ...payload
    })

    await clientRepository.save(updatedClient)

    const returnClient = ClientSchemaReturn.parse(updatedClient)

    return returnClient
}

export {
    updateClientService
}