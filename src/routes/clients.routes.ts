import { Router } from 'express';
import { createClientController,  deleteClientController, listClientController, updateClientController } from '../controllers/client.controllers';
import { ensureUserIsAuth } from '../middleware/ensureUserIsAuth.middleware';
import ensureDataIsValid from '../middleware/ensureDataIsValid.middleware';
import { ClientSchemaCreate, ClientSchemaUpdate } from '../schema/client.schema';

const clientsRoutes:Router = Router()

clientsRoutes.post('', ensureUserIsAuth,ensureDataIsValid(ClientSchemaCreate),createClientController)
clientsRoutes.get('', ensureUserIsAuth,listClientController)
clientsRoutes.patch('/:id', ensureUserIsAuth,ensureDataIsValid(ClientSchemaUpdate),updateClientController)
clientsRoutes.delete('/:id', ensureUserIsAuth,deleteClientController)

export default clientsRoutes