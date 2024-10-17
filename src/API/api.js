
import axios from 'axios';

// Función para registrar un nuevo usuario
export const registerUser = async (userData) => {
    try {
        const response = await axios.post('/api/register', userData); // Asegúrate de que la URL sea correcta
        return { success: true, user: response.data };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// Función para iniciar sesión de un usuario
export const loginUser = async (credentials) => {
    try {
        const response = await axios.post('/api/login', credentials); // Asegúrate de que la URL sea correcta
        return { success: true, user: response.data };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

