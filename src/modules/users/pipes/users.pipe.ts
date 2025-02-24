import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UsersPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('the value is: ', value);

    if (value.id == 1) return value;
    else {
      throw new BadRequestException("id should be 1");
    }
  }
}
