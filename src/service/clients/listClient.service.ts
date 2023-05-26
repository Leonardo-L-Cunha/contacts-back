import { Repository } from 'typeorm';
import { ClientTypeList } from '../../interfaces/client.interface';
import Client from '../../entities/client.entities';
import AppDataSource from '../../data-source';

const listClientService = async (): Promise<ClientTypeList> =>{
    const clientRepository:Repository<Client> = AppDataSource.getRepository(Client)

    const clients:Client[] = await clientRepository.find()


    return clients
}

export {
    listClientService
}