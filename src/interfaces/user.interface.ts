import { z } from 'zod';
import { UserSchemaRequest, UserSchemaCreate, UserSchemaReturn } from '../schema/user.schema';

type UserTypeRequest = z.infer<typeof UserSchemaRequest>

type UserTypeCreate = z.infer<typeof UserSchemaCreate>

type UserTypeReturn = z.infer<typeof UserSchemaReturn>

export {
    UserTypeRequest,
    UserTypeCreate,
    UserTypeReturn
}