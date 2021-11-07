import { Alert, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Login = () => {

  // const LoginBtn = styled(Button)({
  //     background: '#2DC5FF',
  //     color: '#fff',
  //     width: '75%'
  // })

  const [loginUser, setLoginUser] = useState({});
  const { user, isLoading, singInUser, authError, signInWithGoogle } = useAuth();

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginUser = { ...loginUser };
    newLoginUser[field] = value;
    setLoginUser(newLoginUser);
  };

  const location = useLocation();
  const history = useHistory();

  const handleSubmit = (e) => {
    singInUser(loginUser.email, loginUser.password, location, history);

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
            Login
          </Typography>
          {!isLoading && <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
            <TextField
              id="standard-basic"
              name="email"
              onChange={handleChange}
              label="Your Email"
              sx={{ width: "75%", m: 1 }}
              variant="standard"
            />
            <TextField
              id="standard-basic"
              name="password"
              label="Password"
              onChange={handleChange}
              type="password"
              sx={{ width: "75%", m: 1 }}
              variant="standard"
            />
            {/* <LoginBtn>Submit</LoginBtn> */}
            <Button
              type="submit"
              sx={{ width: "75%", my: 2 }}
              variant="contained"
            >
              Login
            </Button>
            <NavLink to="/register" style={{ textDecoration: "none" }}>
              <Button variant="text">haven't you account? sign up</Button>
            </NavLink>
          </form>}
          {!isLoading && <div style={{textAlign: 'center'}}>
              <p>---------------------------OR--------------------------</p>
              <Button onClick={handleGoogleSignin} variant="contained">Sign In With Google</Button>
          </div>}
          {
            isLoading && <h2 style={{textAlign: 'center', color: 'red'}}>Loading...</h2>
          }
          {user?.email && <Alert severity="success">User Sign In successfully!</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%", height: "620px" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
