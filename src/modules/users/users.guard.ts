import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";


@Injectable()
export class UsersGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        const ctx  = context.switchToHttp()
        const req = ctx.getRequest<Request>();
        return true;
    }
}