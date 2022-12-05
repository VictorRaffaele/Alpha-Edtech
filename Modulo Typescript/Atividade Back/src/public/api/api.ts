import {Response, BodyData, LoginData, UserData} from "../model/index.js";

class ApiIndex{
    async register(data: BodyData){
        try {
            const options = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) };
            const response = await fetch("/accounts/", options);
            if (!response.ok || response.status == 500) {
                const message = await response.json();
                throw new Error(message.error);
            }
            const result = await response.json();
            const resp = {'id': result[0].id, 'email': result[0].email, 'name': result[0].name};
            return resp;
        } catch (error: any) {
            throw error;
        }

    }

    async login(data: LoginData){
        try {
            const options = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) };
            const response = await fetch("/accounts/login", options);
    
            if (!response.ok || response.status == 500) {
                const message = await response.json();
                throw new Error(message.error);
            }
            const result = await response.json();
            return result;
        } catch (error: any) {
            throw error;
        }
      
    }

    async update(data: BodyData) {
        try {
            const options = { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) };
            const response = await fetch("/accounts", options);
    
            if (!response.ok || response.status == 500) {
                const message = await response.json();
                throw new Error(message.error);
            }
            const result = await response.json();
            const resp = {'id': result[0].id, 'email': result[0].email, 'name': result[0].name};
            return resp;        
        } 
        catch (error: any) {
            throw error;
        }

    }
}

export {ApiIndex};