import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { EnterpriceService } from "./enterprice.service";
import { CreateEnterpriceDto, CreateEnterpriceResponse } from "./dto/createEnterprice.dto";
import { UpdateEnterpriceDto } from "./dto/updateEnterprice.dto";

@Controller('enterprice')
export class EnterpriceController {
  constructor(private enterpriceService: EnterpriceService) {}

  @Get()
  index(): Promise<CreateEnterpriceResponse[]>{
    return this.enterpriceService.getAllEnterprice();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<CreateEnterpriceResponse> {
    return this.enterpriceService.getOneEnterprice(Number(id));
  }

  @Post('create')
  async create(@Body() data: CreateEnterpriceDto): Promise<CreateEnterpriceResponse> {
    return this.enterpriceService.createEnterprice(data);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.enterpriceService.delete(id);
  }

  @Put('update')
  update(@Body() updateEnterpriceData: UpdateEnterpriceDto): Promise<UpdateEnterpriceDto> {
    return this.enterpriceService.update(updateEnterpriceData);
  }


}
