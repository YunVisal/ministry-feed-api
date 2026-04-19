import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { MinistryService } from 'src/ministry/ministry.service';
import { UpdatePostDto } from './dto/update-post.dto';
import { PageMetaDataDto } from 'src/dto/page-meta.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private repo: Repository<Post>,
    private ministryService: MinistryService,
  ) {}

  async create(dto: CreatePostDto) {
    const ministry = await this.ministryService.getById(dto.ministryId);
    if (!ministry) {
      throw new BadRequestException('Ministry not found');
    }

    const post = this.repo.create(dto);
    post.ministry = ministry;
    post.createdUser = 'SYSTEM';
    post.modifiedUser = 'SYSTEM';
    return this.repo.save(post);
  }

  async getAll(limit: number, page: number) {
    const [posts, totalPost] = await this.repo.findAndCount({
      where: { isDeleted: false },
      relations: { ministry: true },
      take: limit,
      skip: limit * (page - 1),
    });
    return {
      data: posts,
      meta: new PageMetaDataDto(page, limit, totalPost),
    };
  }

  async getById(id: number) {
    const [post] = await this.repo.find({
      where: { isDeleted: false, id },
      relations: { ministry: true },
    });
    return post;
  }

  async update(id: number, dto: UpdatePostDto) {
    const existingPost = await this.getByIdNoRelation(id);
    if (!existingPost) {
      throw new BadRequestException('Post not found');
    }

    const ministry = await this.ministryService.getById(dto.ministryId);
    if (!ministry) {
      throw new BadRequestException('Ministry not found');
    }

    Object.assign(existingPost, dto);
    existingPost.ministry = ministry;
    existingPost.modifiedUser = 'SYSTEM';
    return this.repo.save(existingPost);
  }

  async delete(id: number) {
    const existingPost = await this.getByIdNoRelation(id);
    if (!existingPost) {
      throw new BadRequestException('Post not found');
    }

    existingPost.isDeleted = true;
    existingPost.modifiedUser = 'SYSTEM';
    return this.repo.save(existingPost);
  }

  private getByIdNoRelation(id: number) {
    return this.repo.findOneBy({ id, isDeleted: false });
  }
}
