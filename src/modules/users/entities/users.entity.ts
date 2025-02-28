import { UserRole } from 'src/shared/enums/user-role.enum';
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn} from 'typeorm'
import { Profile } from './../../profile/entities/profile.entity';

@Entity("users")
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    fullName: string;

    @Column({unique: true, nullable: false})
    email: string;

    @Column({nullable: false})
    password: string;

    @Column({nullable: false, default: UserRole.USER, enum: UserRole, enumName: "user_role"})
    role: UserRole;

    @CreateDateColumn({type: 'timestamp', default: ()=>'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp', default: ()=>'CURRENT_TIMESTAMP'})
    updatedAt: Date;

    @OneToOne(()=> Profile, {nullable: false, cascade: true, eager: true})
    @JoinColumn()
    profile: Profile;

}