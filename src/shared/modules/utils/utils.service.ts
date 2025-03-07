import {Injectable} from '@nestjs/common'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UtilsService{
    async getHash(text: string): Promise<string>{
        const salt = await bcrypt.genSalt();
        return await bcrypt.hash(text, salt);
    }

    async isMatchHash(first: string, second: string): Promise<boolean>{
        return await bcrypt.compare(first, second)
    }

    generateUniqueOTP(length = 6): number{
        const digits = "0123456789";
        let otp = '';
        while(otp.length < length){
            const randomDigit = digits[Math.floor(Math.random() * digits.length)];

            // preventing the fist digit being 0 and duplicate digit
            if((otp.length == 0 && randomDigit==='0') || otp.includes(randomDigit)){
                continue;
            }
            else {
                otp += randomDigit;
            }
        }
        return parseInt(otp);
    }



}
