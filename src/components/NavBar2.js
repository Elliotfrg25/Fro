//src/components/NavBar2.js

import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useAuth } from "./AuthContext";

const StyledToolbar = styled(Toolbar)({
    justifyContent: "space-between",
});

const NavBar2 = () => {
    const navigate = useNavigate();
    const { currentUser, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/");
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#0f4c5c' }}>
            <StyledToolbar>
                <Button color="inherit" onClick={() => navigate("/")}>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        PROMETEO
                    </Typography>
                </Button>
                {currentUser && (
                    <>
                        <Button color="inherit" onClick={() => navigate("/dashboard")}>
                            Dashboard
                        </Button>
                        <Button color="inherit" onClick={handleLogout}>
                            Cerrar sesión
                        </Button>
                    </>
                )}
            </StyledToolbar>
        </AppBar>
    );
};

export default NavBar2;
