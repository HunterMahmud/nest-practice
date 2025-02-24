import { IsEmail, IsNotEmpty } from "class-validator";

export class SendDto{
    @IsNotEmpty()
    @IsEmail()
    email: string;
}