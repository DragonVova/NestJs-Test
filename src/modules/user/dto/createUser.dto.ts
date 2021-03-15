import { IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  //Title
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  public title: string;

  //Age
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: Number })
  public age: number;

  //Height
  @IsOptional()
  @IsNumber()
  @ApiProperty({ type: Number })
  public height?: number;

  //Description
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ type: String })
  public description?: string;
}

//Personal ID
export class CreateUserResponse extends CreateUserDto {
  @ApiProperty({ type: Number })
  public id: number;
}
