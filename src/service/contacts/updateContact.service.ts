import { Repository } from 'typeorm';
import AppDataSource from '../../data-source';
import { AppError } from '../../error';
import { ContactTypeReturn, ContactTypeUpdate } from '../../interfaces/contact.interface';
import Contact from '../../entities/contact.entities';
import { ContactSchemaReturn } from '../../schema/contact.shema';

const updateContactService = async(payload: ContactTypeUpdate, contactId: number): Promise<ContactTypeReturn> =>{
    const contactRepository:Repository<Contact> = AppDataSource.getRepository(Contact)

    const findContact: Contact | null = await contactRepository.findOneBy({id:contactId})

    if(!findContact){
        throw new AppError('Contact not found',404)
    }

    const updatedContact: Contact = contactRepository.create({
        ...findContact,
        ...payload
    })

    await contactRepository.save(updatedContact)

    const returnContact = ContactSchemaReturn.parse(updatedContact)

    return returnContact
}

export {
    updateContactService
}