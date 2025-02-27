import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class AuthExceptionsFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status = exception.getStatus(); // This should give the correct status code
    const message = exception.message;

    // Logging more details for debugging
    console.log('Exception caught by filter:', exception);
    console.log('Status code from exception:', status);
    console.log('Error message:', message);

    // You can structure the error response here as needed
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    });
  }
}
