import { Repository } from 'typeorm';
import Client from '../../entities/client.entities';
import AppDataSource from '../../data-source';
import { ContactTypeList } from '../../interfaces/contact.interface';
import Contact from '../../entities/contact.entities';
import { AppError } from '../../error';

const listContactService = async (clientId: number): Promise<ContactTypeList> =>{
    const clientRepository:Repository<Client> = AppDataSource.getRepository(Client)
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    
    const findClient: Client | null = await clientRepository.findOne({
        where:{
            id: clientId
        }
    })

    if(!findClient){
        throw new AppError('Client not found!', 404)
    }

    const contactList: Contact[] = await contactRepository.find({
        where:{
            client:findClient
        }
    })



    return contactList
}

export {
    listContactService
}