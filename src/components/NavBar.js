import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import { useAuth } from "./AuthContext";
import { DollarSign } from "lucide-react";

const StyledToolbar = styled((props) => <Toolbar disableGutters {...props} />)({
    width: '100%',
    maxWidth: 'none',
    justifyContent: "space-between",
    padding: "0 1rem",
    minHeight: "64px",
    margin: 0,
});

const NavBar = () => {
    const navigate = useNavigate();
    const { currentUser, logout } = useAuth();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/");
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
        <AppBar
            position="fixed"
            sx={{
                width: '100%',
                backgroundColor: "black",
                padding: 0,
                margin: 0,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
        >
            <StyledToolbar>
                <Button color="inherit" onClick={() => navigate("/")} sx={{ textTransform: "none" }}>
                    <DollarSign className={`${['icon']} ${['benefit-icon']}`} />
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "bold",
                            color: "#fff",
                            fontSize: "1.8rem",
                            '@media (max-width: 768px)': { fontSize: "1.5rem" },
                            '@media (max-width: 480px)': { fontSize: "1.2rem" },
                        }}
                    >
                        PROMETEOREMITLY
                    </Typography>
                </Button>

                {currentUser ? (
                    <>
                        <Button
                            color="inherit"
                            onClick={() => navigate("/dashboard")}
                            sx={{
                                textTransform: "none",
                                fontSize: "1.2rem",
                                color: "#fff",
                                "&:hover": {
                                    backgroundColor: "#007bff",
                                    transition: "0.3s ease",
                                },
                                '@media (max-width: 768px)': { fontSize: "1rem" },
                                '@media (max-width: 480px)': { fontSize: "0.9rem" },
                            }}
                        >
                            Dashboard
                        </Button>

                        <Button
                            color="inherit"
                            onClick={handleMenu}
                            sx={{
                                ml: 2,
                                textTransform: "none",
                                fontSize: "1.2rem",
                                color: "#fff",
                            }}
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
                                fontSize: "1.2rem",
                                marginRight: "1rem",
                                color: "#fff",
                                "&:hover": {
                                    backgroundColor: "#007bff",
                                    transition: "0.3s ease",
                                },
                                '@media (max-width: 768px)': { fontSize: "1rem" },
                                '@media (max-width: 480px)': { fontSize: "0.9rem" },
                            }}
                        >
                            Registrarse
                        </Button>
                        <Button
                            color="inherit"
                            onClick={() => navigate("/signin")}
                            sx={{
                                textTransform: "none",
                                fontSize: "1.2rem",
                                color: "#fff",
                                "&:hover": {
                                    backgroundColor: "#007bff",
                                    transition: "0.3s ease",
                                },
                                '@media (max-width: 768px)': { fontSize: "1rem" },
                                '@media (max-width: 480px)': { fontSize: "0.9rem" },
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

