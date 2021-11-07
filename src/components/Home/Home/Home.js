import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import ExceptionalDental from '../ExceptionalDental/ExceptionalDental';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <ExceptionalDental />
            <AppointmentBanner />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;