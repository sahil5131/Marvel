import { config } from 'dotenv';
import { executeStudentCrudOperations } from './db/studentsCurd.js';

config();
await executeStudentCrudOperations();