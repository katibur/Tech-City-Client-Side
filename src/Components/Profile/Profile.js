import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Profile = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(res => {
            })
            .catch(error => console.error('error: ', error))
    }
    return (
        <div>
            {user?.displayName}
            {
                user?.uid ? <Button onClick={handleLogOut} className='btn btn-primary'>Log Out</Button> : <div>
                    <h1>Please Log In To See Your Profile</h1>
                    <Button className='btn btn-primary'><Link style={{ textDecoration: 'none', color: 'white' }} to='/login'>Login</Link></Button>
                </div>
            }
        </div>
    );
};

export default Profile;