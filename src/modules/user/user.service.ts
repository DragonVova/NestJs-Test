import { Injectable } from "@nestjs/common";
//DTO
import { CreateUserDto } from "./dto/createUser.dto";

///Entities
//import {UserEntity} from "../../entities/User/user.entity";


@Injectable()
export class UserService {

  //Tested Postman Users work
  private user = []


  //Return User Data via Postman
  getAll() {
    return this.user
  }


  //Create User Data via Postman
  create(createUserDto: CreateUserDto) {
    this.user.push({
      ...createUserDto}
    )
  }
  /////////////////////////////////////////////////


}