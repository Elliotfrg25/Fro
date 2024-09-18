import React from 'react';
import styles from '../styles/ForgotPassword.module.css'; // Importa correctamente el CSS module

class ForgotPassword extends React.Component {
    render() {
        return (
            <>
                <div className={styles.container}>
                    <div className={styles.forgotPasswordForm}>
                        <h1 className={styles.title}>Prometeoremitly</h1>
                        <p className={styles.subtitle}>
                            Enter your email to recover your password
                        </p>
                        <form>
                            <div className={styles.formGroup}>
                                <input
                                    type="email"
                                    id="email"
                                    className={styles.formControl}
                                    placeholder="Your email address"
                                    required
                                />
                            </div>
                            <button type="submit" className={styles.btnPrimary}>
                                Recover Password
                            </button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default ForgotPassword;
