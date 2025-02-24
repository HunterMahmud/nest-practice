export interface IResponsePayload<T>{
    success: boolean;
    message?: string;
    result?: T;
    total?: number;
    status?:number;
}

export interface ILoginResponsePayload{
    success: boolean;
    token?: string;
    message?:string;
    status?: number;
}

