import { z } from 'zod';
import { ContactSchemaCreate, ContactSchemaList, ContactSchemaRequest, ContactSchemaReturn, ContactSchemaUpdate } from '../schema/contact.shema';
import { DeepPartial } from 'typeorm';

type ContactTypeRequest = z.infer<typeof ContactSchemaRequest>

type ContactTypeCreate = z.infer<typeof ContactSchemaCreate>

type ContactTypeReturn = z.infer<typeof ContactSchemaReturn>

type ContactTypeList = z.infer<typeof ContactSchemaList>

type ContactTypeUpdate = DeepPartial<typeof ContactSchemaUpdate>



export {
    ContactTypeRequest,
    ContactTypeCreate,
    ContactTypeReturn,
    ContactTypeList,
    ContactTypeUpdate
}
