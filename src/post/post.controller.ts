import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { PostDto } from './dto/post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { createPaginatedDto } from 'src/dto/paginated.dto';
import { PostQueryDto } from './dto/post-query.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';

const PaginatedPostDto = createPaginatedDto(PostDto);

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Serialize(PostDto)
  create(@Body() dto: CreatePostDto) {
    return this.postService.create(dto);
  }

  @Get()
  @Serialize(PaginatedPostDto)
  getAll(@Query() query: PostQueryDto) {
    const { limit, page } = query;
    return this.postService.getAll(limit, page);
  }

  @Get(':id')
  @Serialize(PostDto)
  getById(@Param('id') id: number) {
    return this.postService.getById(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @Serialize(PostDto)
  update(@Param('id') id: number, @Body() dto: UpdatePostDto) {
    return this.postService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async delete(@Param('id') id: number) {
    await this.postService.delete(id);
    return 'ok';
  }
}
