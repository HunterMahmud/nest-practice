import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersDto } from './dtos/create-users.dto';
import { User } from './entities/users.entity';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async register(data: any): Promise<User> {
    console.log('data in service: ', data);
    try{
        const user = await this.userRepository.findOne({
            where: {
                email: data?.email
            }
        })
        if(user){
            throw new BadRequestException("user already exists")
        }
        return this.userRepository.save(data);
    }
    catch(err){
        throw new BadRequestException("user already found")
    }
  }

  async findUserByEmail(email: string, pass: string) {
    try {
      const user = await this.userRepository.findOne({
        where: {
          email: email,
        },
      });

      if (!user) {
        throw new BadRequestException('not authorized');
      }

      const res = await bcrypt.compare(pass, user.password);
      if (!res) {
        console.log("hello");
        throw new Error();
      }

      

      const {password, ...result} = user;
      return {...result};

      //
    } catch (err) {
      throw new BadRequestException('unauthorized from below');
    }
  }
}
