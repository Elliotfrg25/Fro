import React from 'react';

const Support = () => {
    // Simulando las preguntas frecuentes (en una aplicación real, esto podría venir de una base de datos o API)
    const faqs = [
        { question: '¿Cómo transfiero dinero?', answer: 'Puedes transferir dinero yendo a la sección de Transferencias y siguiendo los pasos.' },
        { question: '¿Cómo cambio mi contraseña?', answer: 'Puedes cambiar tu contraseña en la sección de Configuración de tu perfil.' },
    ];

    return (
        <div className="support">
            <h2>Soporte y Ayuda</h2>
            <div className="faqs">
                <h3>Preguntas Frecuentes</h3>
                {faqs.map((faq, index) => (
                    <div key={index}>
                        <p><strong>{faq.question}</strong></p>
                        <p>{faq.answer}</p>
                    </div>
                ))}
            </div>
            <div className="guides">
                <h3>Guías y Tutoriales</h3>
                <p><a href="/guide/transfer-money">Cómo transferir dinero</a></p>
                <p><a href="/guide/security">Seguridad en tu cuenta</a></p>
            </div>
            <div className="contact">
                <h3>Contacto</h3>
                <p>Email: support@example.com</p>
                <p>Teléfono: 123-456-7890</p>
            </div>
        </div>
    );
};

export default Support;
