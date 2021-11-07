import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import { Container } from '@mui/material';
import Calendar from '../Calendar/Calendar';

const AppointmentHeader = ({value, setValue}) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
            <h1 style={{textAlign: 'center', color: '#1565C0'}}>Appointment</h1>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Calendar value={value} setValue={setValue} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{width: '100%'}} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentHeader;