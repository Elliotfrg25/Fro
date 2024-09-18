import React, { useState } from 'react';
import styles from '../styles/ThirdPartyIntegration.module.css'; // Usar CSS modules para los estilos

const ThirdPartyIntegration = () => {
    const [connections, setConnections] = useState({
        bank: false,
        cryptoWallet: false,
    });

    const handleBankConnection = () => {
        setConnections({ ...connections, bank: !connections.bank });
    };

    const handleCryptoConnection = () => {
        setConnections({ ...connections, cryptoWallet: !connections.cryptoWallet });
    };

    return (
        <div className={styles.integrationContainer}>
            <h2 className={styles.title}>Integración con Servicios de Terceros</h2>

            <div className={styles.integrationItem}>
                <h3>Conexión con Bancos</h3>
                <button className={styles.integrationButton} onClick={handleBankConnection}>
                    {connections.bank ? 'Desconectar' : 'Conectar'} Cuenta Bancaria
                </button>
            </div>

            <div className={styles.integrationItem}>
                <h3>Conexión con Proveedores de Criptomonedas</h3>
                <button className={styles.integrationButton} onClick={handleCryptoConnection}>
                    {connections.cryptoWallet ? 'Desconectar' : 'Conectar'} Billetera de Criptomonedas
                </button>
            </div>
        </div>
    );
};

export default ThirdPartyIntegration;
