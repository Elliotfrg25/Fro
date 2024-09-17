import React, { useState } from 'react';
import styles from '../styles/SecuritySettings.module.css'; // Importa el CSS module

const Settings = () => {
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);

    const handleTwoFactorAuthChange = (e) => {
        setTwoFactorAuth(e.target.checked);
    };

    const [securityQuestions, setSecurityQuestions] = useState([
        { question: '¿Cuál es el nombre de tu primera mascota?', answer: '' },
        { question: '¿Cuál es tu ciudad natal?', answer: '' },
    ]);

    const recentActivity = [
        { type: 'Inicio de sesión', location: 'Nueva York, NY', date: '2023-08-01' },
        { type: 'Cambio de contraseña', location: 'Nueva York, NY', date: '2023-07-28' },
    ];

    const handleSecurityAnswerChange = (index, value) => {
        const newQuestions = [...securityQuestions];
        newQuestions[index].answer = value;
        setSecurityQuestions(newQuestions);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>PROMETEO</h1>
            <div className={styles.settings}>
                <h2>Configuración</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="two-factor-auth">Autenticación de dos factores</label>
                    <input
                        id="two-factor-auth"
                        type="checkbox"
                        checked={twoFactorAuth}
                        onChange={handleTwoFactorAuthChange}
                    />
                </div>
                <div className={styles.settingsOption}>
                    <button className={styles.btnPrimary}>Vincular cuenta bancaria o tarjeta</button>
                </div>
                <div className={styles.settingsOption}>
                    <button className={styles.btnPrimary}>Administrar tokens virtuales</button>
                </div>
                <div className={styles.settingsOption}>
                    <button className={styles.btnPrimary}>Cambiar idioma</button>
                </div>

                {/* Sección de Configuraciones de Seguridad */}
                <div className={styles.securitySettings}>
                    <h2>Configuraciones de Seguridad</h2>
                    <div className={styles.securityQuestions}>
                        <h3>Preguntas de Seguridad</h3>
                        {securityQuestions.map((question, index) => (
                            <div key={index}>
                                <p>{question.question}</p>
                                <input
                                    type="text"
                                    placeholder="Respuesta"
                                    value={question.answer}
                                    onChange={(e) => handleSecurityAnswerChange(index, e.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={styles.recentActivity}>
                        <h3>Actividad Reciente</h3>
                        {recentActivity.map((activity, index) => (
                            <div key={index}>
                                <p>{activity.type} - {activity.location} - {activity.date}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.securityAlerts}>
                        <h3>Alertas de Seguridad</h3>
                        <p>Notificaciones de inicio de sesión desde nuevas ubicaciones: Activado</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
