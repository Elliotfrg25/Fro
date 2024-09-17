// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import MoneyTransfer from "./components/MoneyTransfer";
import TransactionHistory from "./components/TransactionHistory";
import NavBar from "./components/NavBar";
import CurrencyConverter from "./components/CurrencyConverter";
import NotificationSystem from "./components/NotificationSystem";
import Support from "./components/Support";
import SecuritySettings from "./components/SecuritySettings";
import ErrorPage from "./components/ErrorPage";
import Reports from "./components/Reports";
import ThirdPartyIntegration from "./components/ThirdPartyIntegration";
import UserProfile from "./components/UserProfile";
import BankAccounts from "./components/BankAccounts";

import styles from './App.module.css'; // Importa el CSS modular

function App() {
  const isAuthenticated = !!localStorage.getItem('token'); // Simula el estado de autenticación

  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <div className={styles.App}>  {/* Usando el estilo modular */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            {/* Rutas protegidas */}
            <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transfer" element={<MoneyTransfer />} />
              <Route path="/history" element={<TransactionHistory />} />
              <Route path="/notifications" element={<NotificationSystem />} />
              <Route path="/reports" element={<Reports />} />
            </Route>
            {/* Otras rutas */}
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/currency-converter" element={<CurrencyConverter />} />
            <Route path="/support" element={<Support />} />
            <Route path="/security-settings" element={<SecuritySettings />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/third-party-integration" element={<ThirdPartyIntegration />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/bank-accounts" element={<BankAccounts />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
