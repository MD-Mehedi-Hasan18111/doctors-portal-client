import React from 'react';
import fluride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../../Service/Service';
import Typography from '@mui/material/Typography';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem Ipsum is simply dummy printing and typesetting industIpsum has been the ',
        img: fluride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem Ipsum is simply dummy printing and typesetting industIpsum has been the ',
        img: cavity
    },
    {
        name: 'Teath Whitening',
        description: 'Lorem Ipsum is simply dummy printing and typesetting industIpsum has been the ',
        img: whitening
    }
]

const Services = () => {

    return (
        <Box>
            <Container style={{textAlign:'center', marginTop: "10px"}}>
            <Typography variant="h6" component="div">
                OUR SERVICES
                </Typography>
                <Typography sx={{fontWeight: 600, color: 'info.main'}} variant="h4" component="div">
                    Services We Provided
                </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginTop: '20px'}}>
                {
                        services.map(service => <Service key={service.name} service={service} />)
                }
            </Grid>
            </Container>
        </Box>
    );
};

export default Services;