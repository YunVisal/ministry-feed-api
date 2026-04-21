import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostResource } from './post-resource.entity';
import { Repository } from 'typeorm';
import { CreatePostResourceDto } from './dto/create-post-resource.dto';
import { PostService } from 'src/post/post.service';

@Injectable()
export class PostResourceService {
  constructor(
    @InjectRepository(PostResource) private repo: Repository<PostResource>,
    private postService: PostService,
  ) {}

  async create(dto: CreatePostResourceDto) {
    const post = await this.postService.getById(dto.postId);
    if (!post) {
      throw new BadRequestException('Post not found');
    }

    const postEntities = dto.resourceUrl.map((url) => {
      const entity = new PostResource();
      entity.resourceUrl = url;
      entity.post = post;
      entity.createdUser = 'SYSTEM';
      entity.modifiedUser = 'SYSTEM';
      return entity;
    });

    return this.repo.save(postEntities);
  }

  async getByPostId(postId: number) {
    return this.repo.findBy({ isDeleted: false, post: { id: postId } });
  }
}
