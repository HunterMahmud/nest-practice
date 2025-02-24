import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class ChangePasswrodDto{
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(60)
    @MinLength(6)
    password:string;

    @IsNotEmpty()
    @IsNumber()
    otp: number;
}