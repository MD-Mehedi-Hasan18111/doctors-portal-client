import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, value}) => {

    const { name, time, space } = booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <>
            <Grid item xs={12} md={4} sm={6}>
                <Paper elevation={3} sx={{p: 3, textAlign: 'center'}}>
                    <Typography variant="h4" sx={{fontWeight: 600, color: '#1976D2'}}>
                        {name}
                    </Typography>
                    <Typography variant="h6">
                        {time}
                    </Typography>
                    <Typography variant="p" display="block" sx={{mb: 2}}>
                        {space} Space Available
                    </Typography>
                    <Button onClick={handleOpen} variant="contained">Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModal
                date={value}
                booking={booking}
                open={open}
                handleClose={handleClose}
            />
        </>
    );
};

export default Booking;