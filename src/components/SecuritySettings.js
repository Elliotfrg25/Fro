import React, { useState } from 'react';
import styles from '../styles/SecuritySettings.module.css';

const SecuritySettings = () => {
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);
    const [openSection, setOpenSection] = useState(null);

    const handleTwoFactorAuthChange = (e) => {
        setTwoFactorAuth(e.target.checked);
    };

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const recentActivity = [
        { type: 'Inicio de sesión', location: 'Nueva York, NY', date: '2023-08-01' },
        { type: 'Cambio de contraseña', location: 'Nueva York, NY', date: '2023-07-28' },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>PROMETEO</h1>
            <p className={styles.subtitle}>Configuración de Seguridad de tu Cuenta</p>

            {/* Autenticación de dos factores con el nuevo switch */}
            <div className={styles.section}>
                <div className={styles.sectionHeader}>
                    <span>Autenticación de dos factores</span>
                    <label className={styles.switch}>
                        <input
                            type="checkbox"
                            checked={twoFactorAuth}
                            onChange={handleTwoFactorAuthChange}
                        />
                        <span className={styles.slider}></span>
                    </label>
                </div>
                <p className={styles.sectionDescription}>
                    Aumenta la seguridad de tu cuenta con una segunda capa de autenticación.
                </p>
            </div>

            {/* Preguntas de Seguridad */}
            <div className={styles.section}>
                <div className={styles.sectionHeader} onClick={() => toggleSection('securityQuestions')}>
                    Preguntas de Seguridad
                    <span>{openSection === 'securityQuestions' ? '▲' : '▼'}</span>
                </div>
                {openSection === 'securityQuestions' && (
                    <div className={styles.sectionContent}>
                        <p>Configura las preguntas de seguridad para mayor protección.</p>
                    </div>
                )}
            </div>

            {/* Actividad Reciente */}
            <div className={styles.section}>
                <div className={styles.sectionHeader} onClick={() => toggleSection('recentActivity')}>
                    Actividad Reciente
                    <span>{openSection === 'recentActivity' ? '▲' : '▼'}</span>
                </div>
                {openSection === 'recentActivity' && (
                    <div className={styles.sectionContent}>
                        {recentActivity.map((activity, index) => (
                            <p key={index}>{`${activity.type} - ${activity.location} - ${activity.date}`}</p>
                        ))}
                    </div>
                )}
            </div>

            {/* Notificaciones de inicio de sesión con el nuevo switch */}
            <div className={styles.section}>
                <div className={styles.sectionHeader}>
                    Notificaciones de inicio de sesión
                    <label className={styles.switch}>
                        <input type="checkbox" />
                        <span className={styles.slider}></span>
                    </label>
                </div>
                <p className={styles.sectionDescription}>
                    Recibe alertas cuando se inicie sesión desde nuevas ubicaciones.
                </p>
            </div>

            {/* Botones adicionales */}
            <div className={styles.buttonsContainer}>
                <button className={styles.buttonPrimary}>
                    Vincular cuenta bancaria o tarjeta
                </button>
                <button className={styles.buttonPrimary}>
                    Administrar tokens virtuales
                </button>
                <button className={styles.buttonPrimary}>
                    Cambiar idioma
                </button>
            </div>

            {/* Botón final de guardar */}
            <button className={styles.saveButton}>
                Guardar configuración
            </button>
        </div>
    );
};

export default SecuritySettings;
