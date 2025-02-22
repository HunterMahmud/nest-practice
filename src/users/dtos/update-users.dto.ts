import { CreateUsersDto } from './create-users.dto';
import { PartialType} from '@nestjs/mapped-types';
import { IsInt, IsString } from 'class-validator';


export class UpdateUsersModuleDto extends PartialType(CreateUsersDto){
    @IsInt()
    id: number;

    @IsString()
    full_name: string;

    @IsString()
    password: string;
    
    @IsString()
    email: string;
}
