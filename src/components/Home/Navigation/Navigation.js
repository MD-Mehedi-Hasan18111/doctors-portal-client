import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctors Portal
          </Typography>
          <Link style={{textDecoration: 'none', color: '#000'}} to="/appointment">
            <Button variant="contained" color="inherit">
              Appointment
            </Button>
          </Link>
          {user?.email ? (
            <>
              <NavLink style={{textDecoration: 'none', color: '#fff'}} to="/dashboard">
            <Button color="inherit">Dashboard</Button>
            </NavLink>
            <Button onClick={logOut} color="inherit">
              Log out
            </Button>
            </>
          ) : (
            <NavLink style={{textDecoration: 'none', color: '#fff'}} to="/login">
              <Button color="inherit">Log in</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
