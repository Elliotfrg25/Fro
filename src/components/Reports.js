import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2'; // Importa los componentes de gráficos desde 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js'; // Importa y registra desde 'chart.js'
import styles from '../styles/Reports.module.css';

// Registrar los elementos de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const Reports = () => {
    // Datos de ejemplo para el gráfico de historial de transacciones
    const transactionData = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
        datasets: [
            {
                label: 'Transacciones en USD',
                data: [200, 150, 300, 100],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Datos de ejemplo para el gráfico de balance de tokens
    const tokenData = {
        labels: ['Token A', 'Token B', 'Token C'],
        datasets: [
            {
                data: [300, 200, 100],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    return (
        <div className={styles.reportsContainer}>
            <h2>Reportes y Gráficos</h2>
            <div className={styles.chartSection}>
                <div className={styles.chartWrapper}>
                    <h3>Historial de Transacciones</h3>
                    <Bar data={transactionData} className={styles.reportChart} />
                </div>
                <div className={styles.chartWrapper}>
                    <h3>Balance de Tokens</h3>
                    <Doughnut data={tokenData} className={styles.reportChart} />
                </div>
            </div>
        </div>
    );
};

export default Reports;
