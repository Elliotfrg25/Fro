import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignIn.css';
import CustomButton from './CustomButton/CustomButton';
import { useAuth } from '../components/AuthContext'; // Importa el contexto de autenticación

const SignIn = () => {
    const { signIn } = useAuth(); // Extrae la función de signIn del contexto

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const email = e.target.email.value;
        const password = e.target.password.value;

        await signIn(email, password); // Usa la función del contexto para iniciar sesión
    };

    return (
        <div className="container">
            <h1 className="title">PROMETEO</h1>
            <div className="signin-form">
                <h2>Iniciar sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            name="email"
                            type="email"
                            id="email"
                            className="form-control input-field"
                            placeholder="Correo electrónico"
                            required
                        />
                        <label htmlFor="email" className="input-label">Correo electrónico</label>
                    </div>
                    <div className="form-group">
                        <input
                            name="password"
                            type="password"
                            id="password"
                            className="form-control input-field"
                            placeholder="Contraseña"
                            required
                        />
                        <label htmlFor="password" className="input-label">Contraseña</label>
                    </div>
                    <CustomButton variant="contained" type="submit">
                        Iniciar sesión
                    </CustomButton>
                </form>
                <p className="forgot-password">
                    <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
                </p>
                <p className="signup-link">
                    ¿No tienes una cuenta? <Link to="/signup">Regístrate</Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;


