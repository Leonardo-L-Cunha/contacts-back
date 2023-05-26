import { z } from 'zod';

const ClientSchemaRequest = z.object({
    id: z.number(),
    completeName: z.string(),
    avatar: z.string().nullish(),
    email: z.string().email(),
    phone: z.string(),
    profession: z.string().nullish(),
    createdAt: z.string()
})

const ClientSchemaCreate = ClientSchemaRequest.omit({
    id: true,
    createdAt: true
})

const ClientSchemaReturn = ClientSchemaRequest

const ClientSchemaList = ClientSchemaRequest.array()

const ClientSchemaUpdate = ClientSchemaCreate.partial()


export {
    ClientSchemaRequest,
    ClientSchemaCreate,
    ClientSchemaReturn,
    ClientSchemaList,
    ClientSchemaUpdate
}