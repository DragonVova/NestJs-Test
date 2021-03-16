import { omit } from 'lodash';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CreateUserResponse } from '../../modules/user/dto/createUser.dto';

@Entity('user')
export class UserEntity {
  //Id
  @PrimaryGeneratedColumn()
  public id: number;

  //Title
  @Column({ name: 'title', type: 'varchar', nullable: false })
  public title: string;

  //Age
  @Column({ name: 'age', type: 'int', nullable: false })
  public age: number;

  //Height
  @Column({ name: 'height', type: 'int', nullable: true })
  public height: number;

  //Description
  @Column({ name: 'description', type: 'text', nullable: true })
  public description: string;

  //Creating columns
  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  public toResponseObj(): CreateUserResponse {
    return omit(this, ['createdAt']);
  }


}
