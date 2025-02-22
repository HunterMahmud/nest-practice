import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { JwtModule } from '@nestjs/jwt';
import { envConfigService } from 'src/config/db-config.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: envConfigService.getJwtSecret(),
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [],
})
export class UsersModule {}
