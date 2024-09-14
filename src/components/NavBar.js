import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import { useAuth } from "./AuthContext";

const StyledToolbar = styled(Toolbar)({
    justifyContent: "space-between",
    padding: "0 2rem",
});

const NavBar = () => {
    const navigate = useNavigate();
    const { currentUser, logout } = useAuth();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleLogout = async () => {
        try {
            await logout(); // Ahora elimina el token y limpia el estado de usuario
            navigate("/"); // Redirige al usuario a la página principal
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "#0f4c5c", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}>
            <StyledToolbar>
                {/* Logo / Título de la aplicación */}
                <Button color="inherit" onClick={() => navigate("/")} sx={{ textTransform: "none" }}>
                    <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold", color: "#fff" }}>
                        PROMETEOREMITLY
                    </Typography>
                </Button>

                {/* Opciones de navegación */}
                {currentUser ? (
                    <>
                        <Button
                            color="inherit"
                            onClick={() => navigate("/dashboard")}
                            sx={{
                                textTransform: "none",
                                fontSize: "1rem",
                                "&:hover": { backgroundColor: "#007bff", transition: "0.3s ease" },
                            }}
                        >
                            Dashboard
                        </Button>

                        {/* Menú desplegable con opciones de usuario */}
                        <Button
                            color="inherit"
                            onClick={handleMenu}
                            sx={{ ml: 2, textTransform: "none", fontSize: "1rem", color: "#fff" }}
                        >
                            Opciones
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Perfil</MenuItem>
                            <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
                        </Menu>
                    </>
                ) : (
                    <div>
                        <Button
                            color="inherit"
                            onClick={() => navigate("/signup")}
                            sx={{
                                textTransform: "none",
                                fontSize: "1rem",
                                marginRight: "1rem",
                                "&:hover": { backgroundColor: "#007bff", transition: "0.3s ease" },
                            }}
                        >
                            Registrarse
                        </Button>
                        <Button
                            color="inherit"
                            onClick={() => navigate("/signin")}
                            sx={{
                                textTransform: "none",
                                fontSize: "1rem",
                                "&:hover": { backgroundColor: "#007bff", transition: "0.3s ease" },
                            }}
                        >
                            Iniciar sesión
                        </Button>
                    </div>
                )}
            </StyledToolbar>
        </AppBar>
    );
};

export default NavBar;







