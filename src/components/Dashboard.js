import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="container">
            <h1 className="title">PROMETEO</h1>
            <div className="dashboard">
                <h2>Dashboard</h2>
                <div className="balances">
                    <p><span className="icon">💵</span> Saldo actual en pesos colombianos: <strong>COP 0.00</strong></p>
                    <p><span className="icon">💲</span> Saldo actual en dólares americanos: <strong>USD 0.00</strong></p>
                    
                </div>
                <div className="options">
                    
                    <Link to="/transfer" className="btn btn-primary">
                        <span className="icon">🚀</span> Transferir dinero
                    </Link>
                    <Link to="/transaction-history" className="btn btn-primary">
                        <span className="icon">📈</span> Historial de transacciones
                    </Link>
                    <Link to="/security-settings" className="btn btn-primary">
                        <span className="icon">🔒</span> Configuración
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;


