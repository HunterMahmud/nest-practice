import { Column, PrimaryGeneratedColumn } from "typeorm";


export class Otp{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: false})
    email: string;

    @Column()
    otp: number;
}