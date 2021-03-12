import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber
  } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';


export class CreateUserDto {
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
  @IsString()
  @ApiProperty({type: String})
  public height?: string;

  //Description
  @IsOptional()
  @IsString()
  @ApiProperty({type: String})
  public description?: string;
}

  //Personal ID
export class CreateUserResponce extends CreateUserDto {
  @ApiProperty({type: Number})
  public id: number;
}