import { Repository } from 'typeorm'
import AppDataSource from '../../data-source'
import { AppError } from '../../error'
import Contact from '../../entities/contact.entities'

const deleteContactService = async(contactId: number): Promise<void> =>{
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const findContact: Contact | null = await contactRepository.findOneBy({id:contactId})

    if(!findContact) {
        throw new AppError('Client not found', 404)
    }

    await contactRepository.remove(findContact)
}

export {
    deleteContactService
}