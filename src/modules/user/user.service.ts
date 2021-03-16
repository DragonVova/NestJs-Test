import { Injectable } from "@nestjs/common";
//DTO
import { CreateUserDto, CreateUserResponse } from "./dto/createUser.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../../entities/User/user.entity";
import { DeleteResult, Repository } from "typeorm";
import { plainToClass } from "class-transformer";
import { UpdateUserDto } from "./dto/updateUser.dto";

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
    const arrayUserEntities = await this.userRepository.find();
    return arrayUserEntities.map((item) => item.toResponseObj());
  }

  public async delete(id): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }

  public async update(data: UpdateUserDto): Promise<UpdateUserDto> {
    const user = plainToClass(UserEntity, data);
    const newUser = await this.userRepository.save(user);
    return newUser.toResponseObj();
  }

  public async getOne(id: number): Promise<CreateUserResponse> {
    return (await this.userRepository.findOne({id})).toResponseObj();
  }

}