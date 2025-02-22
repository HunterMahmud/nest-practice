import { Injectable } from "@nestjs/common";
import { CreateUsersDto } from './dtos/create-users.dto';


@Injectable()
export class UsersService{

    // public users : CreateUsersDto[] = [
    //     {
    //         id: 1,
    //         email: 'a1@gmail.com',
    //         password: 'abc',
    //         full_name:"name1"
    //     },
    //     {
    //         id: 2,
    //         email: 'a2@gmail.com',
    //         password: 'abc',
    //         full_name:"name2"
    //     },
    //     {
    //         id: 3,
    //         email: 'a3@gmail.com',
    //         password: 'abc',
    //         full_name:"name3"
    //     },
    //     {
    //         id: 4,
    //         email: 'a4@gmail.com',
    //         password: 'abc',
    //         full_name:"name4"
    //     },
    // ]

    findAllUser(){
        return 'this wil return all users';
    }

    login(){
        return "this will return login users"
    }
}