import { Injectable, CanActivate, ExecutionContext} from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from 'express';

@Injectable()
export class ProfileGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const ctx = context.switchToHttp();
        const req = ctx.getRequest<Request>();
        console.log(req.header);
        return true;
    }

}