import { BodyData, LoginData, Response, UserData } from "../interfaces";
export default class ApiIndex{
    async register(data: BodyData): Promise<Response<BodyData>>{
        try {
            const options = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) };
            const response = await fetch("/accounts/", options);
    
            if (!response.ok) {
                const message = await response.json();
                throw new Error(message.error);
            }
            return await response.json();
        } catch (error: any) {
            return error;
        }

    }

    async login(data: LoginData): Promise<Response<LoginData>>{
        try {
            const options = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) };
            const response = await fetch("/accounts/login", options);
    
            if (!response.ok) {
                const message = await response.json();
                throw new Error(message.error);
            }
            return await response.json();
        } catch (error: any) {
            return error;
        }
      
    }

    async update(data: UserData): Promise<Response<UserData>> {
        try {
            const options = { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) };
            const response = await fetch("/accounts", options);
    
            if (!response.ok) {
                const message = await response.json();
                throw new Error(message.error);
            }
            return await response.json();
        } catch (error: any) {
            return error;
        }

    }
}