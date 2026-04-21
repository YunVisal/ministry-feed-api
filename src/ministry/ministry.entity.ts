import { Audit } from '../entities/audit.entity';
import { Post } from '../post/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ministry extends Audit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameKh: string;

  @Column()
  nameEn: string;

  @Column()
  badge: string;

  @Column()
  address: string;

  @Column({ nullable: true })
  telephone: string;

  @Column({ nullable: true })
  email: string;

  @Column()
  websiteUrl: string;

  @Column()
  facebookPageUrl: string;

  @OneToMany(() => Post, (obj) => obj.ministry)
  posts: Post[];
}
