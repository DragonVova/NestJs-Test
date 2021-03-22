import { Module } from "@nestjs/common";
import { EnterpriceService } from "./enterprice.service";
import { EnterpriceController } from "./enterprice.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EnterpriceEntity } from "../../entities/Enterprice/enterprice.entity";

@Module({
  providers: [EnterpriceService],
  controllers: [EnterpriceController],
  imports: [
    TypeOrmModule.forFeature([EnterpriceEntity])
  ]
})
export class EnterpriceModule {
  
}