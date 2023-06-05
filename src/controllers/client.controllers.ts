import { Request, Response } from 'express';
import { ClientTypeCreate, ClientTypeRequest, ClientTypeUpdate, IclientCreate } from '../interfaces/client.interface';
import { createClientService } from '../service/clients/createClient.service';
import { listClientService } from '../service/clients/listClient.service';
import { updateClientService } from '../service/clients/updateClient.service';
import { deleteClientService } from '../service/clients/deleteClient.service';
import { listUniqueClientService } from '../service/clients/listUniqueClient.service';

const createClientController = async(req: Request, res: Response ): Promise<Response> =>{
    const payload:IclientCreate = req.body

    const client = await createClientService(payload)

    return res.status(201).json(client)
}

const listClientController = async(req: Request, res: Response): Promise<Response> =>{
    const clients = await listClientService()
    
    return res.status(200).json(clients)
}

const listUniqueClientController = async(req: Request, res: Response): Promise<Response> => {
    const clientId: number = parseInt(req.params.id)

    const client = await listUniqueClientService(clientId)

    return res.status(200).json(client)
}

const updateClientController = async(req: Request, res: Response): Promise<Response> =>{
    const clientId: number = parseInt(req.params.id)
    const payload: ClientTypeUpdate = req.body

    const updatedClient = await updateClientService(payload,clientId)


    return res.status(200).json(updatedClient)
}

const deleteClientController =async (req: Request, res: Response): Promise<Response> => {
    const clientId: number = parseInt(req.params.id)

    await deleteClientService(clientId)

    return res.status(204).send()
}

export {
    createClientController,
    listClientController,
    updateClientController,
    deleteClientController,
    listUniqueClientController
}