import { Controller, Body, ValidationPipe, Post, UsePipes } from '@nestjs/common';
import { OtpService } from './otp.service';
import { SendDto } from './dtos/send.dto';

@Controller('otp')
export class OtpController{
    constructor(private readonly otpService: OtpService){}

    @Post('send')
    @UsePipes(ValidationPipe)
    async send(@Body() dto: SendDto){
        return await this.otpService.send(dto);
    }
}