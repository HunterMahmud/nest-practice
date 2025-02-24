import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { throws } from "assert";
import { Repository } from "typeorm";
import { User } from "../users/entities/users.entity";
import { RegistrationDto } from "./dtos/registration.dto";
import { LoginDto } from './dtos/login.dto';
import { TestDto } from './dtos/test.dto';

@Injectable()
export class AuthService{
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

    registerUser(data: RegistrationDto){
        return this.userRepository.save(data);
    }
}