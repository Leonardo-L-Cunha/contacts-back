import { Request, Response } from 'express';
import { ContactTypeCreate, ContactTypeList, ContactTypeUpdate } from '../interfaces/contact.interface';
import { createContactService } from '../service/contacts/createContact.service';
import { listContactService } from '../service/contacts/listContact.service';
import { updateContactService } from '../service/contacts/updateContact.service';
import { deleteContactService } from '../service/contacts/deleteContact.service';

const createContactController = async(req: Request, res: Response ): Promise<Response> =>{
    const payload:ContactTypeCreate = req.body
    const clientId: number = parseInt(req.params.id)

    const contact = await createContactService(payload, clientId)

    return res.status(201).json(contact)
}

const listContactController = async(req: Request, res: Response): Promise<Response> =>{
    const clientId: number = parseInt(req.params.id)
    const contact: ContactTypeList = await listContactService(clientId)
    
    return res.status(200).json(contact)
}

const updateContactController = async(req: Request, res: Response): Promise<Response> =>{
    const contactId: number = parseInt(req.params.id)
    const payload: ContactTypeUpdate = req.body

    const updatedClient = await updateContactService(payload,contactId)


    return res.status(200).json(updatedClient)
}

const deleteContactController =async (req: Request, res: Response): Promise<Response> => {
    const contactId: number = parseInt(req.params.id)

    await deleteContactService(contactId)

    return res.status(204).send()
}

export {
    createContactController,
    listContactController,
    updateContactController,
    deleteContactController
}