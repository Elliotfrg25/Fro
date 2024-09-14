import React from 'react';
import '../styles/ForgotPassword.css';

class ForgotPassword extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <h1 className="title">PROMETEO</h1>
                    <div className="forgot-password-form">
                        <h2>Recuperar contraseña</h2>
                        <form>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="e-mail"
                                    required />
                            </div>
                            <button type="submit" className="btn btn-primary">
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



