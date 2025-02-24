import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { throws } from "assert";
import { Repository } from "typeorm";
import { User } from "../users/entities/users.entity";
import { RegistrationDto } from "./dtos/registration.dto";
import { LoginDto } from './dtos/login.dto';
import { TestDto } from './dtos/test.dto';
import { UtilsService } from './../../shared/modules/utils/utils.service';

@Injectable()
export class AuthService{
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,
    private uitlsService: UtilsService){}

    async login(userLogin: LoginDto){
        try {
            const userData = await this.userRepository.findOne({where:{email: userLogin.email}});
            if(!userData){
                return {
                    success: false,
                    message: 'User not found by this email',
                }
            }
        } catch (error) {
            
        }
    }
    async registerUser(data: RegistrationDto){
        return this.userRepository.save(data);
    }


}