import {
  IsNotEmpty,
  IsString,
  IsNumber
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class UpdateEnterpriceDto {

  //ID
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({type: Number})
  public id: number;

  //Name
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  public name: string;

  //Year
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: Number })
  public year: number;

  //Quantity
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: Number })
  public quantity: number;
}