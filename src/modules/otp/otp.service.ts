import { Injectable } from '@nestjs/common';
import { SendDto } from './dtos/send.dto';

@Injectable()
export class OtpService{
    async send(dto: SendDto): Promise<string>{
        return '123456';
    }

    async verify(data:string): Promise<boolean>{
        return data === '123456';
    }
}