import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppDatabaseSourceOption } from './infrastructure/database.config';
import { MinistryModule } from './ministry/ministry.module';

@Module({
  imports: [TypeOrmModule.forRoot(AppDatabaseSourceOption), MinistryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
