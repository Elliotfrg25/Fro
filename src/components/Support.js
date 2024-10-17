import React from 'react';
import React, { useState } from 'react';
import styles from '../styles/Support.module.css'; // Importar el archivo CSS Module

const Support = () => {
    const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

    const toggleQuestion = (index) => {
        if (openQuestionIndex === index) {
            setOpenQuestionIndex(null); // Cierra la pregunta si ya está abierta
        } else {
            setOpenQuestionIndex(index); // Abre la nueva pregunta
        }
    };

    const faqs = [
        { question: '¿Cómo puedo realizar una transferencia?', answer: 'Puedes transferir dinero yendo a la sección de Transferencias y siguiendo los pasos.' },
        { question: '¿Cuáles son las comisiones por transferencia?', answer: 'Las comisiones dependen del banco o plataforma utilizada.' },
        { question: '¿Cómo puedo cambiar mi contraseña?', answer: 'Puedes cambiar tu contraseña en la sección de Configuración de tu perfil.' },
    ];

    return (
        <div className={styles.supportContainer}>
            <h2 className={styles.supportTitle}>Soporte</h2>
            <div className={styles.supportContent}>
                {/* Sección de formulario de contacto */}
                <div className={styles.contactSection}>
                    <h3 className={styles.sectionTitle}>Contáctanos</h3>
                    <p>Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.</p>
                    <form className={styles.contactForm}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" name="name" className={styles.formInput} placeholder="Nombre" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" id="email" name="email" className={styles.formInput} placeholder="Correo electrónico" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message" name="message" className={styles.formInput} placeholder="Escribe tu mensaje"></textarea>
                        </div>
                        <button type="submit" className={styles.submitButton}>Enviar mensaje</button>
                    </form>
                </div>

                {/* Sección de preguntas frecuentes con acordeón */}
                <div className={styles.faqsSection}>
                    <h3 className={styles.sectionTitle}>Preguntas frecuentes</h3>
                    <p>Encuentra respuestas rápidas a las preguntas más comunes.</p>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <p
                                className={styles.faqQuestion}
                                onClick={() => toggleQuestion(index)}
                                style={{ cursor: 'pointer', fontWeight: 'bold' }}
                            >
                                {faq.question}
                            </p>
                            {openQuestionIndex === index && (
                                <p className={styles.faqAnswer}>{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Support;
