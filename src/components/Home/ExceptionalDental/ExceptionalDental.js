import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import treatment from '../../../images/treatment.png';
import { Button, Container, Typography } from '@mui/material';

const ExceptionalDental = () => {
    return (
        <Box style={{paddingBottom: "80px"}}>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={8} sx={{display: 'flex', alignItems: 'center', mt: 1}}>
                <Grid item xs={12} md={6}>
                <img style={{width: "100%"}} src={treatment} alt="treatment" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h2" sx={{fontWeight: 600, color: '#34495e'}}>
                        Exceptional Dental <br /> Care, on Your Terms
                    </Typography>
                    <Typography variant="p" sx={{display: "block", fontSize: "20px", my: 4}}>
                        We're a locally owned and operated full-service dental practice devoted to restoring and enhancing the long-term natural beauty of your smile.
                        We're a locally owned and operated full-service dental practice devoted to restoring and enhancing the long-term natural beauty of your smile.
                        We're a locally owned and operated full-service dental practice devoted to restoring and enhancing the long-term natural beauty of your smile.
                        We're a locally owned and operated full-service dental practice devoted to restoring and enhancing the long-term natural beauty of your smile.
                        We're a locally owned and operated full-service dental practice devoted to restoring and enhancing the long-term natural beauty of your smile.
                        We're a locally owned and operated full-service dental practice devoted to restoring and enhancing the long-term natural beauty of your smile.
                        </Typography>
                        <Button variant="contained" sx={{backgroundColor: '#17D2B7'}}>Learn More</Button> 
                </Grid>
            </Grid>
            </Box>
        </Container>
        </Box>
    );
};

export default ExceptionalDental;