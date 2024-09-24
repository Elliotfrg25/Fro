import React from 'react';
import { DollarSign, Shield, Clock, TrendingUp } from 'lucide-react'; // Iconos de lucide-react
import styles from '../styles/Info.module.css'; // Importar estilos

const Info = () => {
    return (
        <section className={styles['info-section']}>
            <h2 className={styles['section-title']}>PrometeoRemitly: Tu puente financiero entre EE.UU. y Colombia</h2>

            <div className={styles['info-cards']}>
                <div className={styles['info-card']}>
                    <DollarSign className={styles['info-icon']} />
                    <h3>Transferencias Seguras</h3>
                    <p>Envía dinero de Estados Unidos a Colombia de manera rápida y segura con nuestro servicio de remesas confiable.</p>
                </div>

                <div className={styles['info-card']}>
                    <TrendingUp className={styles['info-icon']} />
                    <h3>Tasas Competitivas</h3>
                    <p>Ofrecemos tasas de cambio competitivas y tarifas bajas para maximizar el valor de tus envíos.</p>
                </div>

                <div className={styles['info-card']}>
                    <Clock className={styles['info-icon']} />
                    <h3>Transferencias Rápidas</h3>
                    <p>La mayoría de nuestras transferencias se completan en minutos, asegurando que tu dinero llegue rápidamente a tus seres queridos.</p>
                </div>

                <div className={styles['info-card']}>
                    <Shield className={styles['info-icon']} />
                    <h3>Seguridad Garantizada</h3>
                    <p>Tu dinero y datos personales están protegidos con los más altos estándares de seguridad en la industria.</p>
                </div>
            </div>

            <p className={styles['footer-text']}>
                Conectamos familias y apoyamos sueños, facilitando el envío de remesas de EE.UU. a Colombia.
            </p>

            <div className={styles['flag-container']}>
                <div className={styles['flag-color']} style={{ backgroundColor: '#FFDD00' }}></div>
                <div className={styles['flag-color']} style={{ backgroundColor: '#0033A0' }}></div>
                <div className={styles['flag-color']} style={{ backgroundColor: '#CE1126' }}></div>
            </div>
        </section>
    );
};

export default Info;
