import React, { useState } from 'react';

const UserProfile = () => {
    // Simulando los datos del usuario (estos datos normalmente vendrían de una base de datos o API)
    const [userInfo, setUserInfo] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
    });

    // Estado para manejar la edición
    const [isEditing, setIsEditing] = useState(false);

    // Manejar el inicio de la edición
    const handleEdit = () => {
        setIsEditing(true);
    };

    // Manejar el guardado de los cambios
    const handleSave = () => {
        // Aquí se llamaría a una API para guardar los cambios en la base de datos
        setIsEditing(false);
    };

    // Manejar el cambio en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    return (
        <div className="user-profile">
            {isEditing ? (
                <div>
                    <input type="text" name="name" value={userInfo.name} onChange={handleChange} />
                    <input type="email" name="email" value={userInfo.email} onChange={handleChange} />
                    <input type="tel" name="phone" value={userInfo.phone} onChange={handleChange} />
                    <button onClick={handleSave}>Guardar</button>
                </div>
            ) : (
                <div>
                    <p>Nombre: {userInfo.name}</p>
                    <p>Correo electrónico: {userInfo.email}</p>
                    <p>Teléfono: {userInfo.phone}</p>
                    <button onClick={handleEdit}>Editar</button>
                </div>
            )}
            <div>
                <button>Cambiar contraseña</button>
                {/* Aquí se podría agregar una lógica para cambiar la contraseña */}
            </div>
        </div>
    );
};

export default UserProfile;
