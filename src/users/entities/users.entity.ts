import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity("users")
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    fullName: string;

    @Column({unique: false, nullable: false})
    email: string;

    @Column({nullable: false})
    password: string;

    @CreateDateColumn({type: 'timestamp', default: ()=>'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp', default: ()=>'CURRENT_TIMESTAMP'})
    updatedAt: Date;

}