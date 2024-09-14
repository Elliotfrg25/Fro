//AuthContext.js

import React, { createContext, useContext, useState } from "react";
import axios from 'axios'; // Asegúrate de importar axios

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const signIn = async (email, password) => {
        try {
            // Actualiza la URL con la ruta de inicio de sesión correcta en tu backend
            const response = await axios.post('http://localhost:5000/login', { email, password });
            const token = response.data.token; // Asegúrate de que tu backend envía el token
            localStorage.setItem('token', token);
            setCurrentUser(response.data.user); // Asume que el usuario también se envía en la respuesta
            // Puedes redirigir al usuario al dashboard u otra ruta aquí si lo deseas
        } catch (error) {
            // Maneja el error (por ejemplo, mostrar un mensaje de error)
            console.error("Error iniciando sesión:", error);
        }
    };

    const value = {
        currentUser,
        signIn,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

