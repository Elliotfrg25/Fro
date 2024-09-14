import React, { useState } from 'react';

const BankAccounts = () => {
    // Simulando las cuentas vinculadas (estos datos normalmente vendrían de una base de datos o API)
    const [accounts, setAccounts] = useState([
        { id: 1, type: 'Bank Account', details: 'Bank of America, Acc No: 1234' },
        { id: 2, type: 'Credit Card', details: 'Visa, **** **** **** 5678' },
    ]);

    // Estado para manejar el formulario de nueva cuenta
    const [newAccount, setNewAccount] = useState({ type: '', details: '' });

    // Manejar el cambio en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAccount({ ...newAccount, [name]: value });
    };

    // Manejar la adición de una nueva cuenta
    const handleAddAccount = () => {
        // Aquí se llamaría a una API para agregar la cuenta en la base de datos
        setAccounts([...accounts, { id: accounts.length + 1, ...newAccount }]);
        setNewAccount({ type: '', details: '' });
    };

    // Manejar la eliminación de una cuenta
    const handleDeleteAccount = (id) => {
        // Aquí se llamaría a una API para eliminar la cuenta en la base de datos
        setAccounts(accounts.filter((account) => account.id !== id));
    };

    return (
        <div className="bank-accounts">
            <h2>Cuentas Vinculadas</h2>
            {accounts.map((account) => (
                <div key={account.id}>
                    <p>{account.type}: {account.details}</p>
                    <button onClick={() => handleDeleteAccount(account.id)}>Eliminar</button>
                </div>
            ))}
            <div>
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
