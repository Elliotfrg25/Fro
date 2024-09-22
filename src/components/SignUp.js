import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Alert } from 'reactstrap';
import styles from '../styles/SignUp.module.css';
import { Link } from 'react-router-dom';
import { registerUser } from '../API/api';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        if (formData.password !== formData.confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        if (formData.password.length < 8) {
            setError('La contraseña debe tener al menos 8 caracteres');
            return;
        }

        setLoading(true);
        try {
            const response = await registerUser({
                name: formData.name,
                email: formData.email,
                password: formData.password
            });
            if (response.success) {
                setSuccess(true);
            } else {
                setError(response.error || 'Error registrando al usuario');
            }
        } catch (error) {
            setError('Error en el registro: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
    <div className={styles.signupContainer}>
         <Container className={styles.container}>
             <Row>
                 
                     <div className={styles.signupForm}>
                         <h2 className={styles.title}>Registrarse</h2>
                         <p className={styles.subtitle}>Crea una cuenta para usar nuestra aplicación de remesas</p>
                         {error && <Alert color="danger">{error}</Alert>}
                         {success && <Alert color="success">Usuario registrado con éxito</Alert>}
                         <Form onSubmit={handleSubmit}>
                             <FormGroup className={styles.formGroup}>
                                 <Input
                                     type="text"
                                     name="name"
                                     id="name"
                                     className={styles.inputField}
                                     placeholder=" "
                                     value={formData.name}
                                     onChange={handleChange}
                                     required
                                 />
                                 <Label for="name" className={styles.inputLabel}>Nombre</Label>
                             </FormGroup>
                             <FormGroup className={styles.formGroup}>
                                 <Input
                                     type="email"
                                     name="email"
                                     id="email"
                                     className={styles.inputField}
                                     placeholder=" "
                                     value={formData.email}
                                     onChange={handleChange}
                                     required
                                 />
                                 <Label for="email" className={styles.inputLabel}>Correo electrónico</Label>
                             </FormGroup>
                             <FormGroup className={styles.formGroup}>
                                 <Input
                                     type="password"
                                     name="password"
                                     id="password"
                                     className={styles.inputField}
                                     placeholder=" "
                                     value={formData.password}
                                     onChange={handleChange}
                                     required
                                     minLength="8"
                                 />
                                 <Label for="password" className={styles.inputLabel}>Contraseña</Label>
                             </FormGroup>
                             <FormGroup className={styles.formGroup}>
                                 <Input
                                     type="password"
                                     name="confirmPassword"
                                     id="confirmPassword"
                                     className={styles.inputField}
                                     placeholder=" "
                                     value={formData.confirmPassword}
                                     onChange={handleChange}
                                     required
                                     minLength="8"
                                 />
                                 <Label for="confirmPassword" className={styles.inputLabel}>Confirmar contraseña</Label>
                             </FormGroup>
                             <Button type="submit" className={styles.buttonPrimary} disabled={loading}>
                                 {loading ? 'Registrando...' : 'Registrarse'}
                             </Button>
                         </Form>
                         <p className={styles.signupLink}>
                             ¿Ya tienes una cuenta? <Link to="/signin">Iniciar sesión</Link>
                         </p>
                     </div>
                 
             </Row>
            </Container>
        </div>    
    );
};

export default SignUp;
