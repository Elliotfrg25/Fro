// src/components/TransactionHistory.js
import React, { useState } from 'react';
import '../styles/TransactionHistory.module.css';

const sampleTransactions = [
    {
        id: 1,
        amount: 100,
        currency: 'COP',
        destination: '1234567890',
        date: '2023-04-01',
        status: 'Completada',
    },
    {
        id: 2,
        amount: 50,
        currency: 'USD',
        destination: '0987654321',
        date: '2023-04-10',
        status: 'Completada',
    },
    // Más transacciones de ejemplo
];

const TransactionHistory = () => {  // eslint-disable-next-line 
    const [transactions, setTransactions] = useState(sampleTransactions);  

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString();
    };

    return (
        <div className="container">
            <h1 className="title">PROMETEO</h1>
            <div className="transaction-history">
                <h2>Historial de transacciones</h2>
                <table className="transaction-table">
                    <thead>
                        <tr>
                            <th>Monto</th>
                            <th>Moneda</th>
                            <th>Dirección de destino</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td>{transaction.amount}</td>
                                <td>{transaction.currency}</td>
                                <td>{transaction.destination}</td>
                                <td>{formatDate(transaction.date)}</td>
                                <td>{transaction.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionHistory;
