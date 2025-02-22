import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { UsersService } from './users.service';
import { UsersGuard } from './users.guard';
import { CreateUsersDto } from './dtos/create-users.dto';
import { UsersPipe } from './pipes/users.pipe';


@Controller('users')
@UseGuards(UsersGuard)
export class UsersController{
    constructor(private readonly usersService: UsersService){}

    @Get()
    findAllUser(){
        return this.usersService.findAllUser()
    }

    @Post('/login')
    login(){
        return this.usersService.login();
    }

    @Post()
    addUser(@Body(new UsersPipe()) userInfo: CreateUsersDto){
        console.log("the users info: ",userInfo)
        return userInfo;
    }
}