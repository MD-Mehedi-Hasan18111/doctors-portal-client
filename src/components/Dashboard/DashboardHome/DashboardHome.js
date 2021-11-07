import * as React from 'react';
import Grid from '@mui/material/Grid';
import Calendar from '../../Appointment/Calendar/Calendar';
import Appointments from '../Dashboard/Appointments/Appointments';

const DashboardHome = () => {

    const [value, setValue] = React.useState(new Date());

    return (
        <Grid container spacing={2}>
                      <Grid item xs={12} md={5}>
                        <Calendar value={value} setValue={setValue} />
                      </Grid>
                      <Grid item xs={12} md={7}>
                        <Appointments value={value} />
                      </Grid>
        </Grid>
    );
};

export default DashboardHome;