import { Injectable, CanActivate, ExecutionContext} from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from 'express';

const token = 'fdasfjdksajfkdlsajfkdlsjafkldsaj;f'

@Injectable()
export class ProfileGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const ctx = context.switchToHttp();
        const req = ctx.getRequest<Request>();
        // console.log(req.headers);
        if(req.headers['x-auth-token'] && req.headers['x-auth-token']==token){
            
            return true;
        }
        return false;
    }

}