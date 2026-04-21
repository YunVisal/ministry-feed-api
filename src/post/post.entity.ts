import { PostResource } from '../post-resource/post-resource.entity';
import { Audit } from '../entities/audit.entity';
import { Ministry } from '../ministry/ministry.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post extends Audit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => Ministry, (obj) => obj.posts)
  @JoinColumn()
  ministry: Ministry;

  @OneToMany(() => PostResource, (obj) => obj.post)
  postResources: PostResource[];
}
