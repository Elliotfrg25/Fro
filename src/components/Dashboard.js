import React from 'react';
import styles from '../styles/Dashboard.module.css'; // Importando el CSS module correctamente

const Dashboard = () => {
    return (
        <div className={styles.dashboardContainer}>
            

            {/* Grid para las tarjetas */}
            <div className={styles['dashboard-grid']}>
                <div className={styles.card}>
                    <h3>Saldo Disponible</h3>
                    <p>$1,234.56</p>
                    <button className={styles['button-action']}>Enviar Dinero</button>
                </div>
                <div className={styles.card}>
                    <h3>Último Envío</h3>
                    <p>$500.00</p>
                    <span>A María Gómez - 15 Jun 2023</span>
                </div>
                <div className={styles.card}>
                    <h3>Total Enviado</h3>
                    <p>$4,850.00</p>
                    <span>En los últimos 6 meses</span>
                </div>
                <div className={styles.card}>
                    <h3>Beneficiarios</h3>
                    <p>5</p>
                    <button className={styles['button-action']}>Añadir Nuevo</button>
                </div>
            </div>

            {/* Transacciones Recientes */}
            <div className={styles.transactions}>
                <h3>Transacciones Recientes</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Beneficiario</th>
                            <th>Monto</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>15 Jun 2023</td>
                            <td>María Gómez</td>
                            <td>$500.00</td>
                            <td className={styles['status-completed']}>Completado</td>
                        </tr>
                        <tr>
                            <td>10 Jun 2023</td>
                            <td>Carlos Rodríguez</td>
                            <td>$300.00</td>
                            <td className={styles['status-completed']}>Completado</td>
                        </tr>
                        <tr>
                            <td>5 Jun 2023</td>
                            <td>Ana Martínez</td>
                            <td>$200.00</td>
                            <td className={styles['status-completed']}>Completado</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Historial de Envíos */}
            <div className={styles['historial-envios']}>
                <h3>Historial de Envíos</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Monto</th>
                            <th>Beneficiario</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12 May 2023</td>
                            <td>$450.00</td>
                            <td>Pedro Pérez</td>
                            <td>Completado</td>
                        </tr>
                        <tr>
                            <td>8 May 2023</td>
                            <td>$320.00</td>
                            <td>Laura Medina</td>
                            <td>Completado</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
