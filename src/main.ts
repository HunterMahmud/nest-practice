import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import {ValidationPipe} from '@nestjs/common'

const PORT = process.env.PORT ?? 3000;

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
  });
}
bootstrap();
