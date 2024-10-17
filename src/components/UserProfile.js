import React from 'react';
import React, { useState } from 'react';
import styles from '../styles/UserProfile.module.css';

const UserProfile = () => {
    const [userInfo, setUserInfo] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    return (
        <div className={styles.container}>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        name="name"
                        value={userInfo.name}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    <input
                        type="email"
                        name="email"
                        value={userInfo.email}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={userInfo.phone}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    <button className={styles.buttonPrimary} onClick={handleSave}>Guardar</button>
                </div>
            ) : (
                <div>
                    <p className={styles.info}>Nombre: {userInfo.name}</p>
                    <p className={styles.info}>Correo electrónico: {userInfo.email}</p>
                    <p className={styles.info}>Teléfono: {userInfo.phone}</p>
                    <button className={styles.buttonPrimary} onClick={handleEdit}>Editar</button>
                </div>
            )}
            <div>
                <button className={styles.buttonSecondary}>Cambiar contraseña</button>
            </div>
        </div>
    );
};

export default UserProfile;
