import { DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';

config({ path: `.env.${process.env.NODE_ENV}` });

const isTsNode = !!process[Symbol.for('ts-node.register.instance')];
const fileExt = isTsNode ? 'ts' : 'js';

const configService = new ConfigService();

export const AppDatabaseSourceOption: DataSourceOptions = {
  type: 'postgres',
  host: configService.getOrThrow<string>('DB_HOST'),
  username: configService.getOrThrow<string>('DB_USERNAME'),
  password: configService.getOrThrow<string>('DB_PASSWORD'),
  database: configService.getOrThrow<string>('DB_NAME'),
  entities: [__dirname + `/../**/*.entity.${fileExt}`],
  migrations: [__dirname + `/../../migrations/*.${fileExt}`],
  synchronize: false,
  ssl: true,
};
