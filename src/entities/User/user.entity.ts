//import { omit } from 'lodash';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class UserEntity {

  //Id
  @PrimaryGeneratedColumn()
  public id: string

  //Title
  @Column({ name: 'Title', type: 'varchar', nullable: false })
  public title: string;

  //Age
  @Column({ name: 'Column', type: 'int', nullable: false })
  public age: number;

  //Height
  @Column({ name: 'Height', type: 'int', nullable: true })
  public height: number;

  //Description
  @Column({ name: 'Description', type: 'text', nullable: true})
  public description: string;

  //Creating columns
  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  //Omit ERROR!
  /*public toResponceObj(): CreateUserResponce {
    return omit(this, ['createdAt']);
  }*/


}