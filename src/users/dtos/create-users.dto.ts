import { IsString, IsInt } from "class-validator";

export class CreateUsersDto{
    @IsInt()
    id: number;

    @IsString()
    full_name: string;

    @IsString()
    password: string;
    
    @IsString()
    email: string;
}