import { Repository } from 'typeorm'
import Client from '../../entities/client.entities'
import AppDataSource from '../../data-source'
import { AppError } from '../../error'

const deleteClientService = async(clientId: number): Promise<void> =>{
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const findClient: Client | null = await clientRepository.findOneBy({id:clientId})

    if(!findClient) {
        throw new AppError('Client not found', 404)
    }

    await clientRepository.remove(findClient)
}

export {
    deleteClientService
}