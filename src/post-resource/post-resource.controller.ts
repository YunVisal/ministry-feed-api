import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PostResourceService } from './post-resource.service';
import { CreatePostResourceDto } from './dto/create-post-resource.dto';

@Controller('post-resource')
export class PostResourceController {
  constructor(private postResourceService: PostResourceService) {}

  @Post()
  create(@Body() dto: CreatePostResourceDto) {
    return this.postResourceService.create(dto);
  }

  @Get()
  getByPostId(@Query('postId') postId: number) {
    return this.postResourceService.getByPostId(postId);
  }
}
