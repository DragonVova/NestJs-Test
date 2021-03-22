import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EnterpriceEntity } from "../../entities/Enterprice/enterprice.entity";
import { DeleteResult, Repository } from "typeorm";
import { CreateEnterpriceDto, CreateEnterpriceResponse } from "./dto/createEnterprice.dto";
import { plainToClass } from "class-transformer";
import { UpdateEnterpriceDto } from "./dto/updateEnterprice.dto";

@Injectable()
export class EnterpriceService {
  constructor(
    @InjectRepository(EnterpriceEntity)
    private readonly enterpriceRepository: Repository<EnterpriceEntity>,
  ) {}


  public async createEnterprice(data: CreateEnterpriceDto): Promise<CreateEnterpriceResponse> {
    const enterprice = plainToClass(EnterpriceEntity, data);
    const newEnterprice = await this.enterpriceRepository.save(enterprice);
    return newEnterprice.toResponseEnterprice();
  }


  public async getAllEnterprice(): Promise<CreateEnterpriceResponse[]> {
    const arrayEnterpriceEntities = await this.enterpriceRepository.find();
    return arrayEnterpriceEntities.map((item) => item.toResponseEnterprice());
  }

  public async delete(id): Promise<DeleteResult> {
    return await this.enterpriceRepository.delete(id);
  }

  public async update(data: UpdateEnterpriceDto): Promise<UpdateEnterpriceDto> {
    const enterprice = plainToClass(EnterpriceEntity, data);
    const newEnterprice = await this.enterpriceRepository.save(enterprice);
    return newEnterprice.toResponseEnterprice();
  }

  public async getOneEnterprice(id: number): Promise<CreateEnterpriceResponse> {
    return (await this.enterpriceRepository.findOne({id})).toResponseEnterprice();
  }

}