import { Repository } from "typeorm";
import { ClientTypeReturn } from "../../interfaces/client.interface";
import Client from "../../entities/client.entities";
import AppDataSource from "../../data-source";
import { AppError } from "../../error";

const listUniqueClientService = async(id: number): Promise<ClientTypeReturn> => {
    const clientRepository:Repository<Client> = AppDataSource.getRepository(Client)

    const findClient: Client | null = await clientRepository.findOneBy({id})

    if(!findClient){
        throw new AppError("Client not found", 404)
    }

    return findClient
}

export {
    listUniqueClientService
}