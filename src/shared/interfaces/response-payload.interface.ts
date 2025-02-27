export interface IResponsePayload<T>{
    success: boolean;
    status:number;
    message?: string;
    result?: T;
    total?: number;
}

export interface ILoginResponsePayload{
    success: boolean;
    status: number;
    token?: string;
    message?:string;
}

