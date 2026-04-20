import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MinistryService } from './ministry.service';
import { MinistryController } from './ministry.controller';
import { Ministry } from './ministry.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ministry]), AuthModule],
  providers: [MinistryService],
  controllers: [MinistryController],
  exports: [MinistryService],
})
export class MinistryModule {}
