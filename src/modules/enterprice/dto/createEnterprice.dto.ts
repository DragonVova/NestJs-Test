import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateEnterpriceDto {

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
//ID
export class CreateEnterpriceResponse extends CreateEnterpriceDto {
  @ApiProperty({ type: Number })
  public id: number;
}