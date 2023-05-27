import { Repository } from "typeorm";

import Client from "../../entities/client.entities";
import AppDataSource from "../../data-source";
import { AppError } from "../../error";
import { ClientSchemaReturn } from "../../schema/client.schema";
import { ContactTypeCreate, ContactTypeReturn } from "../../interfaces/contact.interface";
import Contact from "../../entities/contact.entities";
import { ContactSchemaReturn } from "../../schema/contact.shema";

const createContactService = async(paylod:ContactTypeCreate, clientId: number): Promise<ContactTypeReturn> =>{
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const verifyClient:Client | null = await clientRepository.findOneBy({id:clientId})

    if(!verifyClient){
        throw new AppError('Client not found', 404)
    }

    const verifyEmail: Contact | null = await contactRepository.findOne({
        where:{
            email: paylod.email
        }
    })

    if(verifyEmail){
        throw new AppError('Email already exists', 409)
    }

    const contact: Contact = contactRepository.create({
        ...paylod,
        client: verifyClient
    })

    await contactRepository.save(contact)

    const returnContact = ContactSchemaReturn.parse(contact)
    
    return returnContact

    
}

export {
    createContactService
}