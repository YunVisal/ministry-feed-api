import { DataSource } from 'typeorm';
import { AppDatabaseSourceOption } from './database.config';

const appDatabaseSource = new DataSource(AppDatabaseSourceOption);

export { appDatabaseSource };
