import { Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import React from 'react';
import bg from '../../../images/appointment-bg.png';
import './Contact.css';

const Contact = () => {

    const bgStyle = {
        background: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        height: '90vh',
        padding: '35px 0',
        backgroundColor: 'rgb(25, 26, 26, 0.7)',
        backgroundBlendMode: 'darken, luminosity'
    }

    return (
        <Box style={bgStyle}>
            <Container>
                <Box sx={{textAlign: 'center'}}>
                    <Typography variant="h6" sx={{fontWeight: 600, color: '#01a3a4'}}>CONTACT US</Typography>
                    <Typography variant="h3" sx={{fontWeight: 700, color: '#fff'}}>Always Contact With Us</Typography>
                </Box>
                <Box className="contact-form" sx={{ pt: 10, mx: 'auto' }}>
                    <TextField type="email" id="filled-basic" label="Email Address*" variant="filled" sx={{background: '#fff', border: '2px solid #01a3a4', width: '100%', mb: 3}} />
                    <TextField type="email" id="filled-basic" label="Subject*" variant="filled" sx={{ background: '#fff', border: '2px solid #01a3a4', width: '100%', mb: 3}} />
                    <TextareaAutosize
                        variant="filled"
                        aria-label="empty textarea"
                        placeholder=""
                        style={{ background: '#E8E8E8', width: '100%', height: '200px', border: '2px solid #01a3a4' }}
                        />
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;