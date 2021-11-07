import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';

const Banner = () => {

    const backgroundStyle = {
        background: `url(${bg})`
    }

    return (
        <Box style={backgroundStyle}>
            <Container>
            <Grid container spacing={2} style={{display: 'flex', alignItems: 'center', padding: '80px 0 150px 0'}}>
                <Grid item xs={12} md={6}>
                        <Typography variant="h3" sx={{fontWeight: 'bold', color: '#2c3e50'}}>
                            Your New Smile <br /> Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{fontSize: 14, my: 3, color: 'gray'}}>
                        Trusted results for Jobs For Doctors In Usa. Check Visymo Search for the best results! Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. Results & Answers. Types: Best Results, Explore Now, New Sources, Best in Search.
                        </Typography>
                        <Button variant="contained" sx={{backgroundColor: '#17D2B7'}}>Get Appointment</Button>
                </Grid>
                
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%'}} src={chair} alt="" />
                </Grid>
            </Grid>
            </Container>
        </Box>
    );
};

export default Banner;