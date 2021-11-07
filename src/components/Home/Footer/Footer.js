import { Container, Grid, SvgIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bg from "../../../images/footer-bg.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const footerStyle = {
    background: `url(${bg})`,
    padding: "100px",
  };

  return (
    <Box style={footerStyle}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="p" sx={{ color: "#636e72" }}>
              Find Dental Hospital Nyc. <br />
              Unlimited Access. 100%
              <br /> Secure. Always Facts. <br />
              Privacy Friendly.
              <br /> The Best Resources.
              <br /> Results & Answers. Types: <br />
              Best Results,
              <br /> Explore Now, New Sources,
              <br /> Best in Search. Find Dental <br />
              Hospital Nyc.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Typography
              variant="h5"
              sx={{ color: "#00cec9", fontWeight: 500, mb: 2 }}
            >
              Services
            </Typography>
            <Typography
              variant="p"
              sx={{ color: "#636e72", fontWeight: 400, display: "block" }}
            >
              Emargency Care
            </Typography>
            <Typography
              variant="p"
              sx={{ color: "#636e72", fontWeight: 400, display: "block" }}
            >
              Check up
            </Typography>
            <Typography
              variant="p"
              sx={{ color: "#636e72", fontWeight: 400, display: "block" }}
            >
              Tooth Extraction
            </Typography>
            <Typography
              variant="p"
              sx={{ color: "#636e72", fontWeight: 400, display: "block" }}
            >
              Treatment
            </Typography>
            <Typography
              variant="p"
              sx={{ color: "#636e72", fontWeight: 400, display: "block" }}
            >
              Treatment
            </Typography>
            <Typography
              variant="p"
              sx={{ color: "#636e72", fontWeight: 400, display: "block" }}
            >
              Teeth Filling
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Typography
              variant="h5"
              sx={{ color: "#00cec9", fontWeight: 500, mb: 2 }}
            >
              Oral Health
            </Typography>
            <Typography
              variant="p"
              sx={{ color: "#636e72", fontWeight: 400, display: "block" }}
            >
              Emargency Care
            </Typography>
            <Typography
              variant="p"
              sx={{ color: "#636e72", fontWeight: 400, display: "block" }}
            >
              Check up
            </Typography>
            <Typography
              variant="p"
              sx={{ color: "#636e72", fontWeight: 400, display: "block" }}
            >
              Tooth Extraction
            </Typography>
            <Typography
              variant="p"
              sx={{ color: "#636e72", fontWeight: 400, display: "block" }}
            >
              Treatment
            </Typography>
            <Typography
              variant="p"
              sx={{ color: "#636e72", fontWeight: 400, display: "block" }}
            >
              Treatment
            </Typography>
            <Typography
              variant="p"
              sx={{ color: "#636e72", fontWeight: 400, display: "block" }}
            >
              Teeth Filling
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Typography
              variant="h5"
              sx={{
                color: "#00cec9",
                fontWeight: 500,
                display: "block",
                mb: 2,
              }}
            >
              Our Address
            </Typography>
            <Typography
              variant="p"
              sx={{ color: "#636e72", fontWeight: 500, display: "block" }}
            >
              New Yourk - 10011 Hudson, <br /> Yards
            </Typography>
            <Box
              sx={{
                mt: 2,
                display: "grid",
                gridTemplateColumns: "50px 50px 50px",
              }}
            >
              <Typography>
                <SvgIcon component={FacebookIcon} />
              </Typography>
              <Typography>
                <SvgIcon component={GoogleIcon} />
              </Typography>
              <Typography>
                <SvgIcon component={TwitterIcon} />
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <hr />
      <p style={{ fontWeight: 600, textAlign: "center", color: "#636e72" }}>
        copyright &copy; 2021 All right reserved
      </p>
    </Box>
  );
};

export default Footer;
