import { Body, Controller, Get, NotAcceptableException, Post, UseGuards } from "@nestjs/common";
import { UsersService } from './users.service';
import { UsersGuard } from './users.guard';
import { CreateUsersDto } from './dtos/create-users.dto';
import { UsersPipe } from './pipes/users.pipe';
import { User } from "./entities/users.entity";
import * as bcrypt from 'bcrypt'


@Controller('users')
@UseGuards(UsersGuard)
export class UsersController{
    constructor(private readonly usersService: UsersService){}

    @Post('/register')
    async register(
        // @Body('fullName') fullName: string,
        // @Body('email') email: string,
        // @Body('password') password: string,
        @Body() data: CreateUsersDto
    ): Promise<void>{

        const hashPassword = await bcrypt.hash(data.password, 10);

        console.log({fullName: data.fullName, email: data.email, password: hashPassword})
        // return this.usersService.register({fullName, email, password: hashPassword});
    }
    

    @Post('/login')
    async login(@Body() data: any){
        const email = data.email;
        const password = data.password;
        if(!email || !password){
            throw new NotAcceptableException()
        }
        console.log({email, password})
        return this.usersService.findUserByEmail(email, password);
    }

    @Post()
    addUser(@Body(new UsersPipe()) userInfo: CreateUsersDto){
        console.log("the users info: ",userInfo)
        return userInfo;
    }
}