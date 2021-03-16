import { Injectable } from "@nestjs/common";
//DTO
import { CreateUserDto, CreateUserResponse } from "./dto/createUser.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../../entities/User/user.entity";
import { Repository } from "typeorm";
import { plainToClass } from "class-transformer";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async createUser(data: CreateUserDto): Promise<CreateUserResponse> {
    const user = plainToClass(UserEntity, data);
    const newUser = await this.userRepository.save(user);
    return newUser.toResponseObj();
  }

  public async getAll(): Promise<CreateUserResponse[]> {
    return await this.userRepository.find();
  }


}