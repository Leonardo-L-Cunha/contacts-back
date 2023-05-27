import { Router } from 'express';
import { createContactController, deleteContactController, listContactController, updateContactController } from '../controllers/contacts.controllers';
import { ensureUserIsAuth } from '../middleware/ensureUserIsAuth.middleware';
import ensureDataIsValid from '../middleware/ensureDataIsValid.middleware';
import { ContactSchemaCreate, ContactSchemaUpdate } from '../schema/contact.shema';

const contactsRoutes: Router = Router();


contactsRoutes.post('/:id/clients',ensureUserIsAuth,ensureDataIsValid(ContactSchemaCreate),createContactController)
contactsRoutes.get('/:id/clients',ensureUserIsAuth,listContactController)
contactsRoutes.patch('/:id',ensureUserIsAuth,ensureDataIsValid(ContactSchemaUpdate),updateContactController)
contactsRoutes.delete('/:id', ensureUserIsAuth,deleteContactController)

export default contactsRoutes;
