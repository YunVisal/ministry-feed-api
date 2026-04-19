import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MinistryService } from './ministry.service';
import { MinistryController } from './ministry.controller';
import { Ministry } from './ministry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ministry])],
  providers: [MinistryService],
  controllers: [MinistryController],
  exports: [MinistryService],
})
export class MinistryModule {}
