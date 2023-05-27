import express, { Application } from 'express';
import cors from 'cors';
import 'reflect-metadata';
import 'express-async-errors';
import { handleErros } from './error';
import usersRoutes from './routes/users.routes';
import clientsRoutes from './routes/clients.routes';
import contactsRoutes from './routes/contacts.routes';

const app: Application = express();
app.use(express.json());

app.use(cors());

app.use('/register', usersRoutes);
app.use('/clients', clientsRoutes);
app.use('/contacts/', contactsRoutes);

app.use(handleErros);

export default app;
