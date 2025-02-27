import { BadRequestException,UseInterceptors, Body, Controller, Post, Res, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistrationDto } from './dtos/registration.dto';
import { IResponsePayload } from './../../shared/interfaces/response-payload.interface';
import { LoginDto } from './dtos/login.dto';
import { AuthExceptionsFilter } from './auth.exception.filter';
import { Response } from 'express';
import { AuthInterceptor } from './auth.interceptor';

@Controller('/auth')
@UseInterceptors(AuthInterceptor)
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @Post('/register')
  @UsePipes(ValidationPipe)
  @UseFilters(AuthExceptionsFilter) // for customize the exception response
  async registerUser(@Body() dto: RegistrationDto, @Res() res: Response): Promise<IResponsePayload<object>>{
    const result = await this.authservice.registerUser(dto);
    return result;
    // res.status(result.status).json(result);
  }

  @Post('/login')
  @UsePipes(ValidationPipe)
  async loginUser(@Body() dto: LoginDto){ // ,@Res() res: Response
    return await this.authservice.login(dto);
    // return res.status(result.status).json(result);
    // return result;
  }
}
