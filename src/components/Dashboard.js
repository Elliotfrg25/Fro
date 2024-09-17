import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Dashboard.module.css'; // Importando el CSS module correctamente

const Dashboard = () => {
    return (
        <div className={styles.dashboardContainer}>
            <h1 className={styles.title}>PROMETEO</h1>
            <div className={styles.dashboard}>
                <h2>Dashboard</h2>
                <div className={styles.balances}>
                    <p><span className={styles.icon}>💵</span> Saldo actual en pesos colombianos: <strong>COP 0.00</strong></p>
                    <p><span className={styles.icon}>💲</span> Saldo actual en dólares americanos: <strong>USD 0.00</strong></p>
                </div>
                <div className={styles.options}>
                    <Link to="/transfer" className={`${styles.btn} btn-primary`}>
                        <span className={styles.icon}>🚀</span> Transferir dinero
                    </Link>
                    <Link to="/transaction-history" className={`${styles.btn} btn-primary`}>
                        <span className={styles.icon}>📈</span> Historial de transacciones
                    </Link>
                    <Link to="/security-settings" className={`${styles.btn} btn-primary`}>
                        <span className={styles.icon}>🔒</span> Configuración
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
