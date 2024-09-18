import { useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import styles from '../styles/CurrencyConverter.module.css'; // Importa solo el CSS module

const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 110.14,
    CAD: 1.25,
    COP: 4000,
};

function CurrencyConverter() {
    const [amount, setAmount] = useState("1");
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    const handleConvert = () => {
        if (isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
            setError("Please enter a valid amount greater than 0.");
            return;
        }
        setError("");

        const fromRate = exchangeRates[fromCurrency];
        const toRate = exchangeRates[toCurrency];
        const convertedAmount = (parseFloat(amount) / fromRate) * toRate;
        setResult(convertedAmount.toFixed(2));
    };

    const handleSwap = () => {
        const tempCurrency = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(tempCurrency);
    };

    return (
        <div className={styles.currencyConverterContainer}>
            <h2 className={styles.title}>Currency Converter</h2>
            <div className={styles.formGroup}>
                <label htmlFor="amount" className={styles.label}>
                    Amount
                </label>
                <input
                    id="amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    aria-label="Amount to convert"
                    className={styles.currencyInput} /* Referenciando clase CSS */
                />
                {error && <p className={styles.errorText}>{error}</p>}
            </div>
            <div className={styles.currencySelectContainer}>
                <div className={styles.selectWrapper}>
                    <label htmlFor="fromCurrency" className={styles.label}>
                        From
                    </label>
                    <select
                        id="fromCurrency"
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        className={styles.currencySelect} /* Referenciando clase CSS */
                    >
                        {Object.keys(exchangeRates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    onClick={handleSwap}
                    className={styles.currencySwap} /* Referenciando clase CSS */
                    aria-label="Swap currencies"
                >
                    <ArrowRightLeft className={styles.swapIcon} />
                </button>
                <div className={styles.selectWrapper}>
                    <label htmlFor="toCurrency" className={styles.label}>
                        To
                    </label>
                    <select
                        id="toCurrency"
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        className={styles.currencySelect} /* Referenciando clase CSS */
                    >
                        {Object.keys(exchangeRates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <button onClick={handleConvert} className={styles.currencyButton}>
                Convert
            </button>
            {result && (
                <div className={styles.resultContainer}>
                    <p>
                        {amount} {fromCurrency} = {result} {toCurrency}
                    </p>
                </div>
            )}
        </div>
    );
}

export default CurrencyConverter;
