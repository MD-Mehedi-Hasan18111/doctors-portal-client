import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Appointments = ({value}) => {

    const [appointments, setAppointments] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const url = `https://damp-stream-59301.herokuapp.com/appointments?email=${user.email}&date=${value.toLocaleDateString()}`;
        fetch(url)
            .then(res => res.json())
        .then(data => setAppointments(data))
    }, [value])

    return (
        <>
            <h3>Appointments</h3>
            <TableContainer component={Paper}>
            <Table sx={{ }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Time</TableCell>
                    <TableCell align="center">Service</TableCell>
                    <TableCell align="center">Action</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {appointments.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.patientName}
                    </TableCell>
                    <TableCell align="center">{row.time}</TableCell>
                    <TableCell align="center">{row.serviceName}</TableCell>
                    <TableCell align="center"></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </>
    );
};

export default Appointments;