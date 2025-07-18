import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div className="nav-container">
            {auth ?
                <ul style={{ listStyle: 'none' }} className='nav-ul'>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/product">Add Products</Link></li>
                    <li><Link to="/update">Update Products</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
                </ul>

                :
                <ul style={{ listStyle: 'none' }} className='nav-ul navRight' >
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>

                </ul>
            }
        </div>
    )
}
export default Nav;