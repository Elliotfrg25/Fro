import React, { useState } from 'react';

const TokenManagement = () => {
    // Simulando los tokens del usuario (estos datos normalmente vendrían de una base de datos o API)
    const [tokens, setTokens] = useState([
        { id: 'token1', name: 'Token A', quantity: 100, value: 10 },
        { id: 'token2', name: 'Token B', quantity: 50, value: 5 },
    ]);

    // Estado para manejar el formulario de compra/venta
    const [transaction, setTransaction] = useState({ type: '', tokenId: '', quantity: 0 });

    // Manejar el cambio en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTransaction({ ...transaction, [name]: value });
    };

    // Manejar la compra o venta de tokens
    const handleTransaction = () => {
        // Aquí se llamaría a una API para realizar la transacción en la base de datos
        const { type, tokenId, quantity } = transaction;
        setTokens(tokens.map((token) => {
            if (token.id === tokenId) {
                return {
                    ...token,
                    quantity: type === 'buy' ? token.quantity + Number(quantity) : token.quantity - Number(quantity),
                };
            }
            return token;
        }));
        setTransaction({ type: '', tokenId: '', quantity: 0 });
    };

    return (
        <div className="token-management">
            <h2>Tokens Disponibles</h2>
            {tokens.map((token) => (
                <div key={token.id}>
                    <p>{token.name}: {token.quantity} tokens, Valor: ${token.value}</p>
                </div>
            ))}
            <div>
                <h3>Comprar/Vender Tokens</h3>
                <select name="type" value={transaction.type} onChange={handleChange}>
                    <option value="buy">Comprar</option>
                    <option value="sell">Vender</option>
                </select>
                <select name="tokenId" value={transaction.tokenId} onChange={handleChange}>
                    {tokens.map((token) => (
                        <option key={token.id} value={token.id}>{token.name}</option>
                    ))}
                </select>
                <input type="number" name="quantity" placeholder="Cantidad" value={transaction.quantity} onChange={handleChange} />
                <button onClick={handleTransaction}>Realizar Transacción</button>
            </div>
        </div>
    );
};

export default TokenManagement;
