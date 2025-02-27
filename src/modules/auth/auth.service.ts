import { ConflictException, HttpStatus, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { User } from '../users/entities/users.entity';
import { RegistrationDto } from './dtos/registration.dto';
import { LoginDto } from './dtos/login.dto';
import { UtilsService } from './../../shared/modules/utils/utils.service';
import {
  ILoginResponsePayload,
  IResponsePayload,
} from './../../shared/interfaces/response-payload.interface';
import { IJwtPayload } from './../../shared/interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private uitlsService: UtilsService,
    private readonly jwtService: JwtService
  ) {}

  async login(userLogin: LoginDto): Promise<ILoginResponsePayload> {
    try {
      const userData = await this.userRepository.findOne({
        where: { email: userLogin.email },
      });
      if (!userData) {
        return {
          status: 403,
          success: false,
          message: 'Unauthoried user',
        } as ILoginResponsePayload;
      }

      const isMatch = await this.uitlsService.isMatchHash(
        userLogin.password,
        userData.password,
      );
      if (!isMatch) {
        return {
          status: 403,
          success: false,
          message: 'Email or password wrong',
        } as ILoginResponsePayload;
      }

      const jwtPayload: IJwtPayload = {
        id: userData.id,
        email: userData.email,
        role: userData.role,
        fullName: userData.fullName,
      };

      const jwtToken = await this.jwtService.signAsync({...jwtPayload})

      // TODO: generate refresh token if needed and save it to database
      // TODO: generate the jwt token / access token
      return {
        status: 200,
        success: true,
        token: jwtToken,

      } as ILoginResponsePayload;
    } catch (error: any) {
      if (error instanceof QueryFailedError) {
        throw new UnauthorizedException(error.message);
      }
      throw new InternalServerErrorException(error.message);
    }
  }


  async registerUser(data: RegistrationDto): Promise<IResponsePayload<object>> {
    const { password, ...userInfo } = data;

    try {
      // you can check the user is exists first but it is one more query and can make the application heavy
      // const user = await this.userRepository.findOne({where:{email: userInfo.email}});
      // if(user){
      //   throw new ConflictException('Email already exists. Please use a different email address.');
      // }

      const hashedPassword = await this.uitlsService.getHash(data.password);
  
      const result = await this.userRepository.save({
        ...userInfo,
        password: hashedPassword,
      });

      return {
        success: true,
        status: 201,
        message: 'registration success',
        result,
      } as IResponsePayload<User>;
    } catch (error) {

      console.log("error is: ", error)

      if(error instanceof QueryFailedError){
        if(error.driverError.code ==='23505'){
         throw new ConflictException("Email already exists")
        }
      }
      throw new InternalServerErrorException('An unexpected error occurred during registration');
    }
    
  }
}
