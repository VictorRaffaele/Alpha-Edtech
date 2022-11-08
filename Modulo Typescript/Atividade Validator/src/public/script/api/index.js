export default class ApiIndex {
    async register(data) {
        try {
            const options = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) };
            const response = await fetch("/accounts/", options);
            if (!response.ok) {
                const message = await response.json();
                throw new Error(message.error);
            }
            return await response.json();
        }
        catch (error) {
            return error;
        }
    }
    async login(data) {
        try {
            const options = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) };
            const response = await fetch("/accounts/login", options);
            if (!response.ok) {
                const message = await response.json();
                throw new Error(message.error);
            }
            return await response.json();
        }
        catch (error) {
            return error;
        }
    }
    async update(data) {
        try {
            const options = { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) };
            const response = await fetch("/accounts", options);
            if (!response.ok) {
                const message = await response.json();
                throw new Error(message.error);
            }
            return await response.json();
        }
        catch (error) {
            return error;
        }
    }
}