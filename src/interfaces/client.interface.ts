import { z } from 'zod';
import { ClientSchemaCreate, ClientSchemaList, ClientSchemaRequest, ClientSchemaReturn, ClientSchemaUpdate } from '../schema/client.schema';
import { DeepPartial } from 'typeorm';

type ClientTypeRequest = z.infer<typeof ClientSchemaRequest>

type ClientTypeCreate = z.infer<typeof ClientSchemaCreate>

type ClientTypeReturn = z.infer<typeof ClientSchemaReturn>

type ClientTypeList = z.infer<typeof ClientSchemaList>

type ClientTypeUpdate = DeepPartial<typeof ClientSchemaUpdate>

interface IclientCreate{
    id: number,
    completeName:string,
    avatar?: string,
    email: string
    phone: string,
    profession?: string,
    createdAt: string
}

export {
    ClientTypeRequest,
    ClientTypeCreate,
    ClientTypeReturn,
    IclientCreate,
    ClientTypeList,
    ClientTypeUpdate
}
