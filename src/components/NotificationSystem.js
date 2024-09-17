import React, { useState, useEffect } from 'react';
import styles from '../styles/NotificationSystem.module.css'; // Importa correctamente el CSS module

const NotificationSystem = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const newNotification = { id: 1, type: 'success', message: 'Transferencia exitosa!' };
        setNotifications((prevNotifications) => [...prevNotifications, newNotification]);
    }, []);

    const handleCloseNotification = (id) => {
        setNotifications(notifications.filter((notification) => notification.id !== id));
    };

    return (
        <div className={styles.notificationContainer}>
            {notifications.map((notification) => (
                <div key={notification.id} className={`${styles.notificationItem} ${styles[notification.type]}`}>
                    <p>{notification.message}</p>
                    <button onClick={() => handleCloseNotification(notification.id)}>Cerrar</button>
                </div>
            ))}
        </div>
    );
};

export default NotificationSystem;
