import { Container, Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';

const Testimonial = () => {
    return (
        <Box style={{margin: "50px 0"}}>
            <Container>
                <Box style={{marginBottom: "30px"}}>
                    <Typography variant="h5" sx={{ color: '#00cec9' }}>TESTIMONIAL</Typography>
                    
                    <Typography variant="h3" sx={{ color: '#2d3436', fontWeight: 500 }}>What's Our Patients <br /> Says</Typography>
                </Box>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                    <Card sx={{ minWidth: 275, p: 3 }}>
                        <CardContent>
                            <Typography variant="p" sx={{color: "#636e72"}}>
                                    Dental Clinic New York - Quick And Easily Found At Asksly! Many Products. Easy Acces. Quick Results. Compare Products. Search and Discover. Find Easily.
                                    Dental Clinic New York - Quick And Easily Found At Asksly! Many Products. Easy Acces. Quick Results. Compare Products. Search and Discover. Find Easily.
                            </Typography>
                            <Box sx={{display: 'flex', alignItems: 'center', mt: 5}}>
                                    <img width="60px" src={people1} alt="" />
                                    <Box style={{marginLeft: "15px"}}>
                                        <Typography variant="h5" sx={{color: '#00cec9', fontWeight: 500}}>
                                            Winston Harry
                                        </Typography>
                                        <Typography variant="p">
                                            California
                                        </Typography>
                                    </Box>
                            </Box>
                        </CardContent>
                    </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <Card sx={{ minWidth: 275, p: 3 }}>
                        <CardContent>
                            <Typography variant="p" sx={{color: "#636e72"}}>
                                    Dental Clinic New York - Quick And Easily Found At Asksly! Many Products. Easy Acces. Quick Results. Compare Products. Search and Discover. Find Easily.
                                    Dental Clinic New York - Quick And Easily Found At Asksly! Many Products. Easy Acces. Quick Results. Compare Products. Search and Discover. Find Easily.
                            </Typography>
                            <Box sx={{display: 'flex', alignItems: 'center', mt: 5}}>
                                    <img width="60px" src={people2} alt="" />
                                    <Box style={{marginLeft: "15px"}}>
                                        <Typography variant="h5" sx={{color: '#00cec9', fontWeight: 500}}>
                                            Winston Harry
                                        </Typography>
                                        <Typography variant="p">
                                            California
                                        </Typography>
                                    </Box>
                            </Box>
                        </CardContent>
                    </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <Card sx={{ minWidth: 275, p: 3 }}>
                        <CardContent>
                            <Typography variant="p" sx={{color: "#636e72"}}>
                                    Dental Clinic New York - Quick And Easily Found At Asksly! Many Products. Easy Acces. Quick Results. Compare Products. Search and Discover. Find Easily.
                                    Dental Clinic New York - Quick And Easily Found At Asksly! Many Products. Easy Acces. Quick Results. Compare Products. Search and Discover. Find Easily.
                            </Typography>
                            <Box sx={{display: 'flex', alignItems: 'center', mt: 5}}>
                                    <img width="60px" src={people3} alt="" />
                                    <Box style={{marginLeft: "15px"}}>
                                        <Typography variant="h5" sx={{color: '#00cec9', fontWeight: 500}}>
                                            Winston Harry
                                        </Typography>
                                        <Typography variant="p">
                                            California
                                        </Typography>
                                    </Box>
                            </Box>
                        </CardContent>
                    </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Testimonial;