import {Controller, Get, Post, UseGuards} from "@nestjs/common";
import { ProfileGuard } from './profile.guard';

@UseGuards(ProfileGuard)
@Controller('profile')
export class ProfileController{

    @Get('/')
    getProfile(){
        return `this will return the profile`
    }

}