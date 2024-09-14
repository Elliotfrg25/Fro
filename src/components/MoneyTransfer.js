// src/components/MoneyTransfer.js
import React from 'react';
import '../styles/MoneyTransfer.css';

const MoneyTransfer = () => {
    const handleTransfer = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica de transferencia de dinero
        console.log("Transferencia confirmada");
    };

    return (
        <div className="container">
            <h1 className="title">PROMETEO</h1>
            <div className="transfer-form">
                <h2>Transferencia de dinero</h2>
                <form onSubmit={handleTransfer}>
                    <div className="form-group">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Monto"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <select className="form-control" required>
                            <option value="">Seleccionar moneda</option>
                            <option value="COP">Pesos Colombianos (COP)</option>
                            <option value="USD">Dólares Americanos (USD)</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Dirección de destino"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Confirmar transferencia
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MoneyTransfer;
