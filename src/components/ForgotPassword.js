import React from 'react';
import styles from '../styles/ForgotPassword.module.css'; // Importa correctamente el CSS module

class ForgotPassword extends React.Component {
    render() {
        return (
            <>
                <div className={styles.container}>
                    <h1 className={styles.title}>PROMETEO</h1>
                    <div className={styles.forgotPasswordForm}>
                        <h2>Recuperar contraseña</h2>
                        <form>
                            <div className={styles.formGroup}>
                                <input
                                    type="email"
                                    className={styles.formControl}
                                    placeholder="e-mail"
                                    required
                                />
                            </div>
                            <button type="submit" className={styles.btnPrimary}>
                                Enviar enlace de recuperación
                            </button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default ForgotPassword;
