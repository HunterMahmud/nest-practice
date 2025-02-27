import { Injectable } from '@nestjs/common';
import { SendDto } from './dtos/send.dto';
import { VerifyOtpDto } from './dtos/verify-otp.dto';

@Injectable()
export class OtpService{
    async send(dto: SendDto): Promise<string>{
        return '123456';
    }

    async verify(data:VerifyOtpDto): Promise<boolean>{
        return data.otp === 123456;
    }
}