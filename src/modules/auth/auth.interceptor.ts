import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from 'express';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> { 
    console.log("this is the auth interceptor")
    // throw new Error("method not implemented")

    const ctx = context.switchToHttp();
    const res = ctx.getResponse<Response>();
    // console.log("interceptor res: ",res)

    return next.handle().pipe(map(data => {
        // console.log("the data inside handler: ",data)
        if(data.status){
            res.status(data.status);
        }
        return data;
    }))
  }
}
