// src/components/PaymentForm.js

import React, { useState } from 'react';
import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { FaWallet } from 'react-icons/fa';

// Importa los estilos
import styles from '../styles/PaymentForm.module.css';

function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();

    // Estados para manejar la interfaz de usuario
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [amount, setAmount] = useState(''); // Nuevo estado para el monto

    // Función que maneja el envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        if (!stripe || !elements) {
            setLoading(false);
            return;
        }

        const cardElement = elements.getElement(CardElement);

        // Crear un método de pago con la información de la tarjeta
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            try {
                const token = localStorage.getItem('token'); // Si utilizas autenticación
                // Enviar paymentMethod.id y el monto al backend
                const response = await fetch('/api/add-funds', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`, // Si es necesario
                    },
                    body: JSON.stringify({
                        paymentMethodId: paymentMethod.id,
                        amount,
                    }),
                });

                const data = await response.json();

                if (data.requiresAction) {
                    // Manejar autenticación adicional
                    const { error: confirmError } = await stripe.confirmCardPayment(data.clientSecret);
                    if (confirmError) {
                        setError(confirmError.message);
                    } else {
                        setSuccess('¡Fondos agregados exitosamente a tu billetera!');
                        // Actualiza el saldo si es necesario
                    }
                } else if (data.error) {
                    setError(data.error);
                } else {
                    setSuccess('¡Fondos agregados exitosamente a tu billetera!');
                    // Actualiza el saldo si es necesario
                }
            } catch (err) {
                setError('Ocurrió un error al procesar el pago.');
            }
            setLoading(false);
        }
    };

    return (
        <section className={styles['payment-section']}>
            <h2 className={styles['form-title']}>
                <FaWallet className={styles['info-icon']} /> Agregar Fondos a tu Billetera
            </h2>
            <form onSubmit={handleSubmit} className={styles['payment-form']}>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Monto a agregar"
                    required
                    className={styles['amount-input']}
                />
                <div className={styles['card-element']}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#1F2D3D',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </div>
                <button
                    type="submit"
                    disabled={!stripe || loading}
                    className={styles['submit-button']}
                >
                    {loading ? 'Procesando...' : 'Agregar Fondos'}
                </button>
                {error && (
                    <div className={styles['error-message']}>{error}</div>
                )}
                {success && (
                    <div className={styles['success-message']}>{success}</div>
                )}
            </form>
        </section>
    );
}

export default PaymentForm;
