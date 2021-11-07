import React, {useState} from 'react';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Fade, TextField, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background: '#fff',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ open, handleClose, booking, date }) => {
    
  const { name, time } = booking;
  const { user } = useAuth();

  const initialInfo = { patientName: user.displayName, email: user.email, phone: '', serviceName: name, time};

  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  }

    const handleSubmit = (e) => {
      e.preventDefault();
      
      const newAppointment = {
        ...bookingInfo,
        date: date.toLocaleDateString()
      }

      fetch('https://damp-stream-59301.herokuapp.com/appointments', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newAppointment)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            alert("Appointment Successfully");
            handleClose();
        }
      })
    }


    return (
        <>
            <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h5" component="h2" sx={{textAlign: 'center', fontWeight: 700, color: '#1565C0'}}>
              {name}
            </Typography>
                <form onSubmit={handleSubmit}>
                        <TextField
                        disabled
                        hiddenLabel
                        id="filled-hidden-label-small"
                        sx={{width: '100%', my: 2}}            
                        defaultValue={time}
                        variant="filled"
                        size="small"
                        />
                        <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        sx={{ width: '100%', my: 2 }}
                        name="patientName"
                        onBlur={handleOnBlur}
                        defaultValue={user.displayName}
                        variant="filled"
                        size="small"
                        />
                        <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        sx={{ width: '100%', my: 2 }}
                        name="email"
                        onBlur={handleOnBlur}
                        defaultValue={user.email}
                        variant="filled"
                        size="small"
                        />
                        <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        sx={{ width: '100%', my: 2 }}
                        onBlur={handleOnBlur}
                        name="phone"
                        defaultValue='Phone Number'
                        variant="filled"
                        size="small"
                        />
                        <TextField
                        disabled
                        hiddenLabel
                        id="filled-hidden-label-small"
                        sx={{width: '100%', my: 2}}            
                        defaultValue={date.toDateString()}
                        variant="filled"
                        size="small"
                            />
                        <Button type="submit" variant="contained">Submit</Button>
                </form>
          </Box>
        </Fade>
      </Modal>
        </>
    );
};

export default BookingModal;