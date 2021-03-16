import {
  Controller,
  Body,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserService } from './user.service';
import { CreateUserDto, CreateUserResponse } from "./dto/createUser.dto";

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  index(): Promise<CreateUserResponse[]> {
    return this.userService.getAll();
  }


  @Get(':id')
  getOne(@Param('id') id: string): Promise<CreateUserResponse> {
    return this.userService.getOne(Number(id));
  }

  @Post('create')
  async create(@Body() data: CreateUserDto): Promise<CreateUserResponse> {
    //return `Title: ${createUserDto.title} Age: ${createUserDto.age} Description: ${createUserDto.description} Height: ${createUserDto.height}` //-->> String returner
    return this.userService.createUser(data);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.userService.delete(id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'Remove ' + id;
  }

  @Put('update')
  update(@Body() updateUserData: UpdateUserDto): Promise<UpdateUserDto> {
    return this.userService.update(updateUserData);
  }
}
