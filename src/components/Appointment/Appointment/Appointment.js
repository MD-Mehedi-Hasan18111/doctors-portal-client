import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Navigation from '../../Home/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {

    const [value, setValue] = React.useState(new Date());

    return (
        <div>
            <Navigation />
            <AppointmentHeader value={value} setValue={setValue} />
            <AvailableAppointment value={value} />
            <Footer />
        </div>
    );
};

export default Appointment;