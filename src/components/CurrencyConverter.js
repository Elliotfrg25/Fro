import React, { useState } from 'react';

const CurrencyConverter = () => {
    // Simulando las tasas de cambio (estos datos normalmente vendrían de una API o base de datos)
    const exchangeRates = {
        USD: { COP: 3800 },
        COP: { USD: 1 / 3800 },
    };

    // Estado para manejar la conversión
    const [conversion, setConversion] = useState({
        fromCurrency: 'USD',
        toCurrency: 'COP',
        amount: 0,
        result: 0,
    });

    // Manejar el cambio en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setConversion({ ...conversion, [name]: value });
    };

    // Manejar la conversión
    const handleConvert = () => {
        const { fromCurrency, toCurrency, amount } = conversion;
        const rate = exchangeRates[fromCurrency][toCurrency];
        setConversion({ ...conversion, result: amount * rate });
    };

    return (
        <div className="currency-converter">
            <h2>Conversión de Divisas</h2>
            <div>
                <select name="fromCurrency" value={conversion.fromCurrency} onChange={handleChange}>
                    <option value="USD">USD</option>
                    <option value="COP">COP</option>
                </select>
                <input type="number" name="amount" placeholder="Cantidad" value={conversion.amount} onChange={handleChange} />
                <select name="toCurrency" value={conversion.toCurrency} onChange={handleChange}>
                    <option value="USD">USD</option>
                    <option value="COP">COP</option>
                </select>
                <button onClick={handleConvert}>Convertir</button>
            </div>
            <div>
                <p>Resultado: {conversion.result} {conversion.toCurrency}</p>
            </div>
        </div>
    );
};

export default CurrencyConverter;
