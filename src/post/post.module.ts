import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { MinistryModule } from 'src/ministry/ministry.module';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), MinistryModule],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
