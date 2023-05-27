import { z } from 'zod';

const ContactSchemaRequest = z.object({
    id: z.number(),
    completeName: z.string(),
    email: z.string().email(),
    phone: z.string(),
    createdAt: z.string()
})

const ContactSchemaCreate = ContactSchemaRequest.omit({
    id: true,
    createdAt: true
})

const ContactSchemaReturn = ContactSchemaRequest

const ContactSchemaList = ContactSchemaRequest.array()

const ContactSchemaUpdate = ContactSchemaCreate.partial()


export {
    ContactSchemaRequest,
    ContactSchemaCreate,
    ContactSchemaReturn,
    ContactSchemaList,
    ContactSchemaUpdate
}