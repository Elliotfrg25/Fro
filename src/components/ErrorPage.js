import React from 'react';

const ErrorPage = () => {
    // Simulando un código de error (en la práctica, esto podría ser pasado como un prop o extraído de la URL)
    const errorCode = '404'; // Cambiar según sea necesario

    return (
        <div className="error-page">
            {errorCode === '404' ? (
                <div>
                    <h2>Error 404: Página No Encontrada</h2>
                    <p>Lo sentimos, la página que estás buscando no existe.</p>
                    <a href="/">Ir a la página principal</a>
                </div>
            ) : errorCode === '500' ? (
                <div>
                    <h2>Error 500: Error Interno del Servidor</h2>
                    <p>Lo sentimos, algo salió mal en nuestro lado. Por favor, intenta de nuevo más tarde.</p>
                    <a href="/">Ir a la página principal</a>
                </div>
            ) : (
                <div>
                    <h2>Error Desconocido</h2>
                    <p>Lo sentimos, ha ocurrido un error desconocido. Por favor, intenta de nuevo más tarde.</p>
                    <a href="/">Ir a la página principal</a>
                </div>
            )}
        </div>
    );
};

export default ErrorPage;

