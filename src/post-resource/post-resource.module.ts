import { Module } from '@nestjs/common';
import { PostResourceService } from './post-resource.service';
import { PostResourceController } from './post-resource.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostResource } from './post-resource.entity';
import { PostModule } from 'src/post/post.module';

@Module({
  imports: [TypeOrmModule.forFeature([PostResource]), PostModule],
  providers: [PostResourceService],
  controllers: [PostResourceController],
})
export class PostResourceModule {}
