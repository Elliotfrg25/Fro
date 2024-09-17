import { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/Select";
import { ArrowRightLeft } from "lucide-react";
import styles from '../styles/CurrencyConverter.module.css'; // Importando el CSS module


const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 110.14,
    CAD: 1.25,
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
            <h2 className={styles.text2xl}>Currency Converter</h2>
            <div className={styles.spaceY4}>
                <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                        Amount
                    </label>
                    <Input
                        id="amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                        aria-label="Amount to convert"
                    />
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>
                <div className={styles.currencySelectContainer}>
                    <div className="flex-1">
                        <label htmlFor="fromCurrency" className="block text-sm font-medium text-gray-700 mb-1">
                            From
                        </label>
                        <Select value={fromCurrency} onValueChange={setFromCurrency} aria-label="From currency">
                            <SelectTrigger id="fromCurrency">
                                <SelectValue placeholder="Select currency" />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.keys(exchangeRates).map((currency) => (
                                    <SelectItem key={currency} value={currency}>
                                        {currency}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <Button variant="outline" size="icon" onClick={handleSwap} className="mt-6">
                        <ArrowRightLeft className="h-4 w-4" />
                    </Button>
                    <div className="flex-1">
                        <label htmlFor="toCurrency" className="block text-sm font-medium text-gray-700 mb-1">
                            To
                        </label>
                        <Select value={toCurrency} onValueChange={setToCurrency} aria-label="To currency">
                            <SelectTrigger id="toCurrency">
                                <SelectValue placeholder="Select currency" />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.keys(exchangeRates).map((currency) => (
                                    <SelectItem key={currency} value={currency}>
                                        {currency}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <Button onClick={handleConvert} className="w-full">
                    Convert
                </Button>
                {result && (
                    <div className={styles.resultContainer}>
                        <p>
                            {amount} {fromCurrency} = {result} {toCurrency}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CurrencyConverter;
