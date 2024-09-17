import React, { useState } from 'react';
import styles from '../styles/BankAccounts.module.css'; // Importando correctamente el CSS Module

const BankAccounts = () => {
    const [accounts, setAccounts] = useState([
        { id: 1, type: 'Bank Account', details: 'Bank of America, Acc No: 1234' },
        { id: 2, type: 'Credit Card', details: 'Visa, **** **** **** 5678' },
    ]);

    const [newAccount, setNewAccount] = useState({ type: '', details: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAccount({ ...newAccount, [name]: value });
    };

    const handleAddAccount = () => {
        setAccounts([...accounts, { id: accounts.length + 1, ...newAccount }]);
        setNewAccount({ type: '', details: '' });
    };

    const handleDeleteAccount = (id) => {
        setAccounts(accounts.filter((account) => account.id !== id));
    };

    return (
        <div className={styles.bankAccounts}> {/* Aplicando clase del CSS Module */}
            <h2>Cuentas Vinculadas</h2>
            {accounts.map((account) => (
                <div key={account.id} className={styles.bankAccountItem}> {/* Clase modular */}
                    <p>{account.type}: {account.details}</p>
                    <button onClick={() => handleDeleteAccount(account.id)}>Eliminar</button>
                </div>
            ))}
            <div className={styles.bankAccountForm}> {/* Clase modular */}
                <h3>Agregar Nueva Cuenta</h3>
                <select name="type" value={newAccount.type} onChange={handleChange}>
                    <option value="Bank Account">Cuenta Bancaria</option>
                    <option value="Credit Card">Tarjeta de Crédito</option>
                </select>
                <input type="text" name="details" placeholder="Detalles" value={newAccount.details} onChange={handleChange} />
                <button onClick={handleAddAccount}>Agregar</button>
            </div>
        </div>
    );
};

export default BankAccounts;
