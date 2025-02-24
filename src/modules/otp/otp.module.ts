import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Otp } from "./entities/otp.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Otp])],
    providers: [],
    controllers: []
})
export class OtpModule{

}