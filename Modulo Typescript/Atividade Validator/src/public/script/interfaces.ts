//Q2
export interface Response<T>{
    data: T;
    message: Array<string>;
}

export interface UserData{
    id: string;
    name: string;
    email: string;
    password: string;
}

export interface LoginData{
    id: string;
}

export interface BodyData{
    name: string;
    email: string;
    password: string;
}
