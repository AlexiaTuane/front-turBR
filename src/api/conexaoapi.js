// ConexaoApi.js
const apiUrl = 'http://127.0.0.1:8000/api/';
const ConexaoApi = {
    login: async (username, password) => {
        try {
            const response = await fetch(`${apiUrl}login/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Erro ao autenticar usuário');
            }

            const data = await response.json();

            // Salve o token no localStorage
            localStorage.setItem('token', data.token);

            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getPontosTuristicos: async () => {
        try {
            // Obtenha o token salvo no localStorage
            const token = localStorage.getItem('token');

            // Verifique se há um token antes de fazer a chamada à API
            if (!token) {
                throw new Error('Token de autenticação não encontrado');
            }

            const response = await fetch(`${apiUrl}pontoturistico/`, {
                method: 'GET',
                headers: {
                    'Authorization': `Token ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Erro ao obter pontos turísticos');
            }

            return await response.json();
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default ConexaoApi;
