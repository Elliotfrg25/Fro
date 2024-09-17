import React from 'react';
import styles from '../styles/ErrorPage.module.css'; // Importar el archivo CSS Module

const ErrorPage = () => {
    const errorCode = '404'; // Puedes cambiar el código de error si es necesario

    return (
        <div className={styles.errorContainer}>
            {errorCode === '404' ? (
                <div>
                    <h2 className={styles.errorMessage}>Error 404: Página No Encontrada</h2>
                    <p>Lo sentimos, la página que estás buscando no existe.</p>
                    <a href="/" className={styles.homeLink}>Ir a la página principal</a>
                </div>
            ) : errorCode === '500' ? (
                <div>
                    <h2 className={styles.errorMessage}>Error 500: Error Interno del Servidor</h2>
                    <p>Lo sentimos, algo salió mal en nuestro lado. Por favor, intenta de nuevo más tarde.</p>
                    <a href="/" className={styles.homeLink}>Ir a la página principal</a>
                </div>
            ) : (
                <div>
                    <h2 className={styles.errorMessage}>Error Desconocido</h2>
                    <p>Lo sentimos, ha ocurrido un error desconocido. Por favor, intenta de nuevo más tarde.</p>
                    <a href="/" className={styles.homeLink}>Ir a la página principal</a>
                </div>
            )}
        </div>
    );
};

export default ErrorPage;
