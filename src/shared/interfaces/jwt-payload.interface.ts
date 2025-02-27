import { UserRole } from 'src/shared/enums/user-role.enum';
export interface IJwtPayload{
    id: number;
    fullName?: string;
    email: string;
    role: UserRole;
}