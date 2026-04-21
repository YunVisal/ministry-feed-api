import { Post } from '../post/post.entity';
import { Audit } from '../entities/audit.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class PostResource extends Audit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  resourceUrl: string;

  @ManyToOne(() => Post, (obj) => obj.postResources)
  @JoinColumn()
  post: Post;
}
