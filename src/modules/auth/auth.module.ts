import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/users.entity';
import { UtilsModule } from './../../shared/modules/utils/utils.module';
import { JwtService, JwtModule } from '@nestjs/jwt';
import { envConfigService } from 'src/config/db-config.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: envConfigService.getJwtSecret(),
    }),
    UtilsModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [],
})
export class AuthModule {}
