import {Controller, Get, Post} from "@nestjs/common";

@Controller('profile')
export class ProfileController{

    @Get('/')
    getProfile(){
        return `this will return the profile`
    }

}