import React from 'react';
import React, { useState } from 'react';
import { Table, Container, Row, Col } from 'reactstrap';
import styles from '../styles/TransactionHistory.module.css'; // El archivo CSS modular

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

const TransactionHistory = () => {
    const [transactions] = useState(sampleTransactions);

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString();
    };

    return (
        <div className={styles.transactionContainer}>
            <Container>
                <Row>
                    <Col>
                        <h2 className={styles.title}>Historial de Transacciones</h2>
                        <Table className={styles.transactionTable} responsive>
                            <thead>
                                <tr>
                                    <th>Monto</th>
                                    <th>Moneda</th>
                                    <th>Dirección de Destino</th>
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
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TransactionHistory;
