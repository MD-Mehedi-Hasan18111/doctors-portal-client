import { Button, Grid, Typography, Box } from '@mui/material';
import React from 'react';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';

const AppointmentBanner = () => {

    const styles = {
        background: `url(${bg})`,
        marginTop: "100px",
        backgroundColor: "rgb(25, 26, 26, 0.6)",
        backgroundBlendMode: 'darken, luminosity'
    }

    return (
        <Grid style={styles} container spacing={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Grid item xs={12} md={6}>
                <img style={{width: "100%", height: "100%", marginTop: "-175px"}} src={doctor} alt="" />
            </Grid>
            <Grid item xs={12} md={6}>
                <Box style={{paddingLeft: "20px"}}>
                    <Typography variant="h4" sx={{ mb: 1.5, fontWeight: 600, mb: 3, color: '#00cec9'}}>
                        Appointment
                    </Typography>
                    <Typography variant="h3" sx={{ mb: 1.5, fontWeight: 600, mb: 3, color: '#fff'}}>
                        Make An Appointment
                    </Typography>
                    <Typography variant="p" sx={{ mb: 1.5, fontWeight: 600, mb:3, color: '#fff'}}>
                    Here, the background image is repeated only vertically. Here, the background image is repeated only vertically.
                    </Typography>
                    <Typography variant="h4" sx={{ mb: 1.5, fontWeight: 600, mb: 3, color: 'info.main', mt: 3}}>
                        <Button variant="contained" sx={{backgroundColor: '#00cec9'}}>Learn More</Button>
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default AppointmentBanner;