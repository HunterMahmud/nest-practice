import { Controller, Body, ValidationPipe, Post, UsePipes } from '@nestjs/common';
import { OtpService } from './otp.service';
import { SendDto } from './dtos/send.dto';
import { VerifyOtpDto } from './dtos/verify-otp.dto';

@Controller('otp')
export class OtpController{
    constructor(private readonly otpService: OtpService){}

    @Post('send')
    @UsePipes(ValidationPipe)
    async send(@Body() dto: SendDto){
        return await this.otpService.send(dto);
    }

    @Post('verify')
    @UsePipes(ValidationPipe)
    async verify(@Body() dto: VerifyOtpDto){
        return await this.otpService.verify(dto)
    }


}