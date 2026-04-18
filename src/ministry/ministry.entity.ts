import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Ministry {
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
