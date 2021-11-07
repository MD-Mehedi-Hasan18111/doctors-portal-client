import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, {useState} from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const { token } = useAuth();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmitAdmin = (e) => {
        e.preventDefault();

        const admin = { email };
        fetch('https://damp-stream-59301.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Successfully added admin");
                    e.target.reset();
            }
        })
    }

    return (
        <div>
            <div style={{textAlign:'center'}}>
                <h2>Make an admin!!</h2>
                <form onSubmit={handleSubmitAdmin}>
                    <TextField sx={{width: '50%'}} onBlur={handleEmail} label="Email" variant="standard" />
                    <Button type="submit" variant="contained">Make Admin</Button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;