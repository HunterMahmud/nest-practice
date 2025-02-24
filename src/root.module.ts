import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { appDataSource } from './config/db.config';
import { JwtModule } from '@nestjs/jwt';
import { envConfigService } from './config/db-config.service';
import jwtConfig from './config/jwt.config';
import { AuthModule } from './modules/auth/auth.module';


@Module({
  imports: [
  ConfigModule.forRoot({
      isGlobal: true,
      load: [jwtConfig]
    }),
    TypeOrmModule.forRoot(appDataSource.options),
    AuthModule,
    UsersModule,

  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {}
