import {
  CreateDateColumn,
  Column,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';

export class Audit {
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
