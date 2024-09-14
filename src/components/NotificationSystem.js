import React, { useState, useEffect } from 'react';

const NotificationSystem = () => {
    // Estado para manejar la cola de notificaciones
    const [notifications, setNotifications] = useState([]);

    // Simular la adición de una notificación (en la práctica, esto podría ser llamado desde otros componentes o servicios)
    useEffect(() => {
        const newNotification = { id: 1, type: 'success', message: 'Transferencia exitosa!' };
        setNotifications((prevNotifications) => [...prevNotifications, newNotification]); // Actualización funcional
    }, []); // Matriz de dependencias vacía

    // Manejar el cierre de una notificación
    const handleCloseNotification = (id) => {
        setNotifications(notifications.filter((notification) => notification.id !== id));
    };

    return (
        <div className="notification-system">
            {notifications.map((notification) => (
                <div key={notification.id} className={`notification ${notification.type}`}>
                    <p>{notification.message}</p>
                    <button onClick={() => handleCloseNotification(notification.id)}>Cerrar</button>
                </div>
            ))}
        </div>
    );
};

export default NotificationSystem;

