import { Router } from 'express';
import { createClientController, deleteClientController, listClientController, updateClientController } from '../controllers/client.controllers';

const clientsRoutes:Router = Router()

clientsRoutes.post('',createClientController)
clientsRoutes.get('',listClientController)
clientsRoutes.patch('/:id',updateClientController)
clientsRoutes.delete('/:id', deleteClientController)

export default clientsRoutes