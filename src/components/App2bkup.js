//src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './components/AuthContext';

import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";

import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import MoneyTransfer from "./components/MoneyTransfer";
import TransactionHistory from "./components/TransactionHistory";
import CryptoExchange from "./components/CryptoExchange";
import CurrencyConverter from "./components/CurrencyConverter";
import NotificationSystem from "./components/NotificationSystem";
import Support from "./components/Support";
import SecuritySettings from "./components/SecuritySettings";
import ErrorPage from "./components/ErrorPage";
import Reports from "./components/Reports";
import ThirdPartyIntegration from "./components/ThirdPartyIntegration";
import UserProfile from "./components/UserProfile";
import BankAccounts from "./components/BankAccounts";

// Componente envoltorio para rutas con NavBar
const NavBarWrapper = ({ children }) => (
    <>
        <NavBar />
        {children}
    </>
);

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    {/* Rutas con NavBar */}
                    <Route path="/" element={<NavBarWrapper><HomePage /></NavBarWrapper>} />
                    <Route path="/signin" element={<NavBarWrapper><SignIn /></NavBarWrapper>} />
                    <Route path="/signup" element={<NavBarWrapper><SignUp /></NavBarWrapper>} />

                    {/* Resto de las rutas con NavBar2 */}
                    <Route path="/dashboard" element={<NavBar2><Dashboard /></NavBar2>} />
                    <Route path="/forgot-password" element={<NavBar2><ForgotPassword /></NavBar2>} />
                    <Route path="/transfer" element={<NavBar2><MoneyTransfer /></NavBar2>} />
                    <Route path="/history" element={<NavBar2><TransactionHistory /></NavBar2>} />
                    <Route path="/crypto-exchange" element={<NavBar2><CryptoExchange /></NavBar2>} />
                    <Route path="/currency-converter" element={<NavBar2><CurrencyConverter /></NavBar2>} />
                    <Route path="/notifications" element={<NavBar2><NotificationSystem /></NavBar2>} />
                    <Route path="/support" element={<NavBar2><Support /></NavBar2>} />
                    <Route path="/security-settings" element={<NavBar2><SecuritySettings /></NavBar2>} />
                    <Route path="/error" element={<NavBar2><ErrorPage /></NavBar2>} />
                    <Route path="/reports" element={<NavBar2><Reports /></NavBar2>} />
                    <Route path="/third-party-integration" element={<NavBar2><ThirdPartyIntegration /></NavBar2>} />
                    <Route path="/user-profile" element={<NavBar2><UserProfile /></NavBar2>} />
                    <Route path="/bank-accounts" element={<NavBar2><BankAccounts /></NavBar2>} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;