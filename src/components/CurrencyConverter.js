import { useState } from "react";
import  Button  from "./ui/Button";
import  Input  from "./ui/Input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/Select";
import { ArrowRightLeft } from "lucide-react";
import '../styles/CurrencyConverter.css';


// Simulación de tasas de cambio (en una app real, estos vendrían de una API)
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
    const [error, setError] = useState(""); // Para manejar errores

    // Función de conversión de divisas
    const handleConvert = () => {
        if (isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
            setError("Please enter a valid amount greater than 0.");
            return;
        }
        setError(""); // Limpiar el error si el valor es válido

        const fromRate = exchangeRates[fromCurrency];
        const toRate = exchangeRates[toCurrency];
        const convertedAmount = (parseFloat(amount) / fromRate) * toRate;
        setResult(convertedAmount.toFixed(2));
    };

    // Función para intercambiar las monedas
    const handleSwap = () => {
        const tempCurrency = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(tempCurrency);
    };

    return (
        <div className="currency-converter-container">
            <h2 className="text-2xl font-bold mb-6 text-center">Currency Converter</h2>
            <div className="space-y-4">
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
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>} {/* Mostrar error si lo hay */}
                </div>
                <div className="flex items-center space-x-4">
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
                    <div className="mt-4 p-4 bg-gray-100 rounded-md">
                        <p className="text-lg font-semibold text-center">
                            {amount} {fromCurrency} = {result} {toCurrency}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CurrencyConverter;
