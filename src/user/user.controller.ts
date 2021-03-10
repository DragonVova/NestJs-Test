import { Controller, Body, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";

@Controller('user')
export class UserController {

  @Get()
  getAll(): string {
    return 'getAll';
  }

  @Get(':id')
  getOneID(@Param('id') id: string): string {

    return 'getOne ' + id;

  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): string {
    return `Title: ${createUserDto.title} Age: ${createUserDto.age} Description: ${createUserDto.description} Height: ${createUserDto.height}`
  }

  @Delete(':id')
  remove(@Param('id')id: string) {
    return 'Remove ' +id
  }

  @Put(':id')
  update(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string): string {
    return 'Update ' + id
  }



}
