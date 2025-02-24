import { IsString } from "class-validator";

export class CreateUsersDto{

    @IsString()
    fullName: string;

    @IsString()
    password: string;
    
    @IsString()
    email: string;
}