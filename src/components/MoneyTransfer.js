import React from 'react';
import styles from '../styles/MoneyTransfer.module.css';

const MoneyTransfer = () => {
    const handleTransfer = (e) => {
        e.preventDefault();
        console.log("Transferencia confirmada");
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>PROMETEO</h1>
            <div className={styles.transferForm}>
                <h2>Transferencia de dinero</h2>
                <form onSubmit={handleTransfer}>
                    <div className={styles.formGroup}>
                        <input
                            type="number"
                            className={styles.formControl}
                            placeholder="Monto"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <select className={styles.formControl} required>
                            <option value="">Seleccionar moneda</option>
                            <option value="COP">Pesos Colombianos (COP)</option>
                            <option value="USD">Dólares Americanos (USD)</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            className={styles.formControl}
                            placeholder="Dirección de destino"
                            required
                        />
                    </div>
                    <button type="submit" className={styles.btnPrimary}>
                        Confirmar transferencia
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MoneyTransfer;
