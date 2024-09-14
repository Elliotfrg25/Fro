//src/components/SecuritySettings.js

import React, { useState } from 'react';
import '../styles/SecuritySettings.css';

const Settings = () => {
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);

    const handleTwoFactorAuthChange = (e) => {
        setTwoFactorAuth(e.target.checked);
    };

    // Simulando preguntas de seguridad y actividad reciente (en una aplicación real, esto podría venir de una base de datos o API)
    const [securityQuestions, setSecurityQuestions] = useState([
        { question: '¿Cuál es el nombre de tu primera mascota?', answer: '' },
        { question: '¿Cuál es tu ciudad natal?', answer: '' },
    ]);

    const recentActivity = [
        { type: 'Inicio de sesión', location: 'Nueva York, NY', date: '2023-08-01' },
        { type: 'Cambio de contraseña', location: 'Nueva York, NY', date: '2023-07-28' },
    ];

    // Manejar el cambio en las respuestas a las preguntas de seguridad
    const handleSecurityAnswerChange = (index, value) => {
        const newQuestions = [...securityQuestions];
        newQuestions[index].answer = value;
        setSecurityQuestions(newQuestions);
    };

    return (
        <div className="container">
            <h1 className="title">PROMETEO</h1>
            <div className="settings">
                <h2>Configuración</h2>
                <div className="form-group">
                    <label htmlFor="two-factor-auth">Autenticación de dos factores</label>
                    <input
                        id="two-factor-auth"
                        type="checkbox"
                        checked={twoFactorAuth}
                        onChange={handleTwoFactorAuthChange}
                    />
                </div>
                <div className="settings-option">
                    <button className="btn btn-primary">Vincular cuenta bancaria o tarjeta</button>
                </div>
                <div className="settings-option">
                    <button className="btn btn-primary">Administrar tokens virtuales</button>
                </div>
                <div className="settings-option">
                    <button className="btn btn-primary">Cambiar idioma</button>
                </div>

                {/* Sección de Configuraciones de Seguridad */}
                <div className="security-settings">
                    <h2>Configuraciones de Seguridad</h2>
                    <div className="security-questions">
                        <h3>Preguntas de Seguridad</h3>
                        {securityQuestions.map((question, index) => (
                            <div key={index}>
                                <p>{question.question}</p>
                                <input type="text" placeholder="Respuesta" value={question.answer} onChange={(e) => handleSecurityAnswerChange(index, e.target.value)} />
                            </div>
                        ))}
                    </div>
                    <div className="recent-activity">
                        <h3>Actividad Reciente</h3>
                        {recentActivity.map((activity, index) => (
                            <div key={index}>
                                <p>{activity.type} - {activity.location} - {activity.date}</p>
                            </div>
                        ))}
                    </div>
                    <div className="security-alerts">
                        <h3>Alertas de Seguridad</h3>
                        <p>Notificaciones de inicio de sesión desde nuevas ubicaciones: Activado</p>
                        {/* Aquí se podrían agregar más configuraciones y alertas */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
