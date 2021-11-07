import { Alert, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import login from "../../../images/login.png";
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from "../../../hooks/useAuth";


const Register = () => {
  const [loginUser, setLoginUser] = useState({});

  const { user, registerUser, isLoading, authError, signInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginUser = { ...loginUser };
    newLoginUser[field] = value;
    setLoginUser(newLoginUser);
  };

  const handleSubmit = (e) => {
    if (loginUser.password1 !== loginUser.password2) {
      alert("Password Didn't Match!");
      return;
    }
    registerUser(loginUser.email, loginUser.password1, loginUser.name, history);

    e.preventDefault();
  };

  const handleGoogleSignin = () => {
    signInWithGoogle(location, history);
  }

  return (
    <Container>
      <Grid
        container
        spacing={3}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              display: "block",
              my: 1,
              color: "#2DC5FF",
            }}
          >
            Sing Up
          </Typography>
          {!isLoading && <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
            <TextField
              id="standard-basic"
              type="text"
              name="name"
              onChange={handleChange}
              label="Your Name"
              sx={{ width: "75%", m: 1 }}
              variant="standard"
              required
            />
            <TextField
              id="standard-basic"
              type="email"
              name="email"
              onChange={handleChange}
              label="Your Email"
              sx={{ width: "75%", m: 1 }}
              variant="standard"
              required
            />
            <TextField
              id="standard-basic"
              name="password1"
              label="Password"
              onChange={handleChange}
              type="password"
              sx={{ width: "75%", m: 1 }}
              variant="standard"
              required
            />
            <TextField
              id="standard-basic"
              name="password2"
              label="Re-enter Password"
              onChange={handleChange}
              type="password"
              sx={{ width: "75%", m: 1 }}
              variant="standard"
              required
            />
            <Button
              type="submit"
              sx={{ width: "75%", my: 2 }}
              variant="contained"
            >
              Sign Up
            </Button>
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <Button variant="text">have you account? sign in</Button>
            </NavLink>
          </form>}
          {!isLoading && <div style={{textAlign: 'center'}}>
              <p>---------------------------OR--------------------------</p>
              <Button onClick={handleGoogleSignin} variant="contained">Sign In With Google</Button>
          </div>}
          {
            isLoading && <CircularProgress />
          }
          {user?.email && <Alert severity="success">User Created successfully!</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%", height: "620px" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
