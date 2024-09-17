import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, Alert } from 'reactstrap'; // Import Alert para mostrar errores
import '../styles/SignUp.module.css';
import { Link } from 'react-router-dom';
import { registerUser } from '../API/api'; // Asegúrate de que la ruta sea correcta

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null); // Estado para el manejo de errores
    const [success, setSuccess] = useState(false); // Estado para mostrar éxito

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Resetea el estado de error al intentar registrar
        setSuccess(false); // Resetea el estado de éxito

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        try {
            // Llamada a la función de la API para registrar al usuario
            const response = await registerUser({ name, email, password });
            if (response.success) {
                setSuccess(true);
            } else {
                setError(response.error || 'Error registrando al usuario');
            }
        } catch (error) {
            setError('Error en el registro: ' + error.message);
        }
    };

    return (
        <Container>
            <Row>
                <Col xs={{ size: 12 }} sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
                    <div className="signup-form">
                        <h2>Registrarse</h2>
                        {/* Mostrar alerta en caso de error */}
                        {error && <Alert color="danger">{error}</Alert>}
                        {success && <Alert color="success">Usuario registrado con éxito</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="name">Nombre</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Nombre"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Correo electrónico</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Correo electrónico"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" // Validación de correo
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Contraseña</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Contraseña"
                                    minLength="8" // Mínimo de 8 caracteres
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="confirmPassword">Confirmar contraseña</Label>
                                <Input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="Confirmar contraseña"
                                    minLength="8" // Mismo mínimo para confirmación
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </FormGroup>
                            <Button type="submit" color="primary">
                                Registrarse
                            </Button>
                        </Form>
                        <p className="signin-link">
                            ¿Ya tienes una cuenta? <Link to="/signin">Iniciar sesión</Link>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;






