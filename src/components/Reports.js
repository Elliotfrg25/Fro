import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';

const Reports = () => {
    // Datos de ejemplo para el gráfico de historial de transacciones
    const transactionData = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
        datasets: [
            {
                label: 'Transacciones en USD',
                data: [200, 150, 300, 100],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    // Datos de ejemplo para el gráfico de balance de tokens
    const tokenData = {
        labels: ['Token A', 'Token B', 'Token C'],
        datasets: [
            {
                data: [300, 200, 100],
                backgroundColor: ['red', 'blue', 'green'],
            },
        ],
    };

    return (
        <div className="reports">
            <h2>Reportes y Gráficos</h2>
            <div className="transaction-history">
                <h3>Historial de Transacciones</h3>
                <Bar data={transactionData} />
                {/* Aquí puedes agregar opciones de filtro */}
            </div>
            <div className="token-balance">
                <h3>Balance de Tokens</h3>
                <Doughnut data={tokenData} />
                {/* Aquí puedes agregar opciones de filtro */}
            </div>
        </div>
    );
};

export default Reports;
