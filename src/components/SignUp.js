import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import '../styles/SignUp.css';
import { Link } from 'react-router-dom';
import { registerUser } from '../API/api'; // Asegúrate de que la ruta sea correcta

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Llamada a la función de la API para registrar al usuario
        const response = await registerUser({ name, email, password });
        if (response.success) {
            console.log('Usuario registrado:', response.user);
        } else {
            console.error('Error registrando al usuario:', response.error);
        }
    };

    return (
        <Container>
            <Row>
                <Col xs={{ size: 12 }} sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
                    <div className="signup-form">
                        <h2>Registrarse</h2>
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




