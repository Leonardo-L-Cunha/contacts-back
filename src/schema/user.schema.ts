import { z } from 'zod';

const UserSchemaRequest = z.object({
    id: z.number(),
    email: z.string().email(),
    password: z.string()
})

const UserSchemaCreate = UserSchemaRequest.omit({
    id:true
})

const UserSchemaReturn = UserSchemaRequest.omit({
    password: true
})

export {
    UserSchemaRequest,
    UserSchemaCreate,
    UserSchemaReturn
}