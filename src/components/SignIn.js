// src/components/SignIn.js
import React from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';
import styles from '../styles/SignIn.module.css'; // Asegúrate de que estos estilos reflejen los cambios
import CustomButton from './CustomButton/CustomButton';
import { useAuth } from '../components/AuthContext';

const SignIn = () => {
    const { signIn } = useAuth();
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        setError(null);

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const result = await signIn(email, password);
            if (!result.success) {
                setError('Error al iniciar sesión. Verifique sus credenciales.');
            }
        } catch (error) {
            setError('Error en el inicio de sesión: ' + error.message);
        }
    };

    return (
        <div className={styles.signupContainer}>
            <div className={styles.signinForm}>
                <h2 className={styles.title}>Iniciar sesión</h2>

                {error && <Alert color="danger">{error}</Alert>}

                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            className={styles.inputField}
                            placeholder="Correo electrónico"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required
                        />
                        <label htmlFor="email" className={styles.inputLabel}>Correo electrónico</label>
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            name="password"
                            type="password"
                            id="password"
                            className={styles.inputField}
                            placeholder="Contraseña"
                            minLength="8"
                            required
                        />
                        <label htmlFor="password" className={styles.inputLabel}>Contraseña</label>
                    </div>
                    <CustomButton variant="contained" type="submit" className={styles.buttonPrimary}>
                        Iniciar sesión
                    </CustomButton>
                </form>
                <p className={styles.forgotPassword}>
                    <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
                </p>
                <p className={styles.signupLink}>
                    ¿No tienes una cuenta? <Link to="/signup">Regístrate</Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
 