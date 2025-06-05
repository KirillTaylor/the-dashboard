import Api from './api';

class AuthApi extends Api {
    constructor() {
        super();
    }

    async login(email: string, password: string) {
        try {
            const isCorrectEmail = email === 'demo@thedashboard.com';
            const isCorrectPassword = password === 'demo';
            if (!isCorrectEmail || !isCorrectPassword) {
                throw new Error('Incorrect email or password');
            }
            // TODO: Implement login API
            //const response = await super.post('/auth/login', { email, password });
            const response = {
                token: '1234567890',
                user: {
                    id: 1,
                    name: 'John Doe',
                },
            };
            return response;
        } catch (error) {
            console.error(error);
            throw new Error('Incorrect email or password');
        }
    }
}

export default new AuthApi();