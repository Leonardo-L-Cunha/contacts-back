import express, { Application } from 'express';
import cors from 'cors';
import 'reflect-metadata';
import 'express-async-errors';
import { handleErros } from './error';
import usersRoutes from './routes/users.routes';
import clientsRoutes from './routes/clients.routes';
import contactsRoutes from './routes/contacts.routes';
import loginRouter from './routes/login.routes';
import bodyParser from 'body-parser';

const app: Application = express();

app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(cors());

app.use('/register', usersRoutes);
app.use('/auth',loginRouter)
app.use('/clients', clientsRoutes);
app.use('/contacts/', contactsRoutes);

app.use(handleErros);

export default app;
