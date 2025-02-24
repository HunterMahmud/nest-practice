import { BadRequestException, Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistrationDto } from './dtos/registration.dto';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/users.entity';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {
    console.log('auth controller');
  }

  @Post('/register')
  @UsePipes(ValidationPipe)
  async registerUser(@Body() data: RegistrationDto): Promise<User>{
    const { password, ...userInfo } = data;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      return this.authservice.registerUser({
        ...userInfo,
        password: hashedPassword,
      });
    } catch (error) {
        throw new BadRequestException("register unsuccessful");
    }
  }

  @Post('/login')
  async loginUser(){

  }
}
