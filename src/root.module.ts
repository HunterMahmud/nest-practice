import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { appDataSource } from './config/db.config';
import { JwtModule } from '@nestjs/jwt';
import { envConfigService } from './config/db-config.service';
@Module({
  imports: [
    TypeOrmModule.forRoot(appDataSource.options),
    UsersModule,
    
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {}
