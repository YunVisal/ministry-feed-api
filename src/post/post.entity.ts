import { Ministry } from '../ministry/ministry.entity';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => Ministry, (obj) => obj.posts)
  @JoinColumn()
  ministry: Ministry;

  @Column()
  isDeleted: boolean;

  @Column()
  createdUser: string;

  @CreateDateColumn()
  createdDate: Date;

  @Column()
  modifiedUser: string;

  @UpdateDateColumn()
  modifiedDate: Date;

  @BeforeInsert()
  beforeInsert() {
    this.isDeleted = false;
  }
}
