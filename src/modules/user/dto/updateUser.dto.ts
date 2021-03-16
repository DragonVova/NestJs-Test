import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber
} from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  //Personal ID
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({type: Number})
  public id: number;

  //Title
  @IsNotEmpty()
  @IsString()
  @ApiProperty({type: String})
  public title: string;

  //Age
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({type: Number})
  public age: number;

  //Height
  @IsOptional()
  @IsNumber()
  @ApiProperty({type: Number})
  public height?: number;

  //Description
  @IsOptional()
  @IsString()
  @ApiProperty({type: String})
  public description?: string;
}
