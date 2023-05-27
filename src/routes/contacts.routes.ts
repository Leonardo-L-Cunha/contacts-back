import { Router } from 'express';
import { createContactController, deleteContactController, listContactController, updateContactController } from '../controllers/contacts.controllers';

const contactsRoutes: Router = Router();


contactsRoutes.post('/:id/clients',createContactController)
contactsRoutes.get('/:id/clients',listContactController)
contactsRoutes.patch('/:id',updateContactController)
contactsRoutes.delete('/:id', deleteContactController)

export default contactsRoutes;
