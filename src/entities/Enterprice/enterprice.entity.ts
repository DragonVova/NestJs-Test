import { omit } from 'lodash';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CreateEnterpriceResponse } from "../../modules/enterprice/dto/createEnterprice.dto";

@Entity('enterprice')
export class EnterpriceEntity {

  //ID
  @PrimaryGeneratedColumn()
  public id: number;

  //Name
  @Column({ name: 'name', type: 'varchar', nullable: false })
  public name: string;

  //Year
  @Column({ name: 'year', type: 'int', nullable: false })
  public year: number;

  //Quantity
  @Column({ name: 'quantity', type: 'int', nullable: false })
  public quantity: number;
  
  //Time created
  @CreateDateColumn({ name: 'createdAt' })
  public createdAt: Date;

  //Return to frontend
  public toResponseEnterprice(): CreateEnterpriceResponse{
    return omit(this, ['createdAt']);
  }
}