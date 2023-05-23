import  express ,{ Application } from 'express';
import cors from 'cors';
import 'reflect-metadata'
import 'express-async-errors'
import { handleErros } from './error';

const app:Application = express()
app.use(express.json())

app.use(cors())

app.use(handleErros)

export default app