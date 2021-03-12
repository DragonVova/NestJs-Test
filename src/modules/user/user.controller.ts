import {
  Controller,
  Body,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAll() {
    //return 'getAll'
    return this.userService.getAll(); //-->> String returner
  }

  @Get(':id')
  getOneID(@Param('id') id: string): string {
    return 'getOne ' + id;
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    //return `Title: ${createUserDto.title} Age: ${createUserDto.age} Description: ${createUserDto.description} Height: ${createUserDto.height}` -->> String returner
    return this.userService.create(createUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'Remove ' + id;
  }

  @Put(':id')
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param('id') id: string,
  ): string {
    return 'Update ' + id;
  }
}
