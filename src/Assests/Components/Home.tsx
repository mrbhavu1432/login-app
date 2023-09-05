import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Registration from './Registration';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('Login')) {
            navigate('/');
        }
        else {
            navigate("/home")
        }
    }, []);
    const logOut = () => {
        localStorage.removeItem('Login')
        toast.success("Log-Out")
        navigate('/');
    }
    return (<>
        <div style={{ fontSize: '10rem' }}>
            Hello Home
        </div>
        <button type="button" className='btn btn-primary' onClick={logOut}>Log Out</button>
    </>

    )
}

export default Home