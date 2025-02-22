import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { appDataSource } from './config/db.config';

@Module({
  imports: [
  TypeOrmModule.forRoot(appDataSource.options),
    UsersModule
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {}
