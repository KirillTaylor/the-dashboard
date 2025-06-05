const apiConfig = {
    baseUrl: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
}

class Api {
    private baseUrl: string;
    private headers: Record<string, string>;

    constructor() {
        this.baseUrl = apiConfig.baseUrl;
        this.headers = apiConfig.headers;
    }

    // implement get, post, put, delete methods
    async get(url: string) {
        const response = await fetch(`${this.baseUrl}${url}`, { headers: this.headers });
        return response.json();
    }
    
    async post(url: string, data: any) {
        const response = await fetch(`${this.baseUrl}${url}`, { headers: this.headers, method: 'POST', body: JSON.stringify(data) });
        return response.json();
    }
    
    async put(url: string, data: any) {
        const response = await fetch(`${this.baseUrl}${url}`, { headers: this.headers, method: 'PUT', body: JSON.stringify(data) });    
        return response.json();
    }

    async delete(url: string) {
        const response = await fetch(`${this.baseUrl}${url}`, { headers: this.headers, method: 'DELETE' });
        return response.json();
    }
}

export default Api;