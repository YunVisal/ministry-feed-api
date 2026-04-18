import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppDatabaseSourceOption } from './infrastructure/database.config';

@Module({
  imports: [TypeOrmModule.forRoot(AppDatabaseSourceOption)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
