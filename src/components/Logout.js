import React from 'react'
import "./Logout.css"
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/userSlice';
import { Link } from 'react-router-dom';
import {PiHandsPrayingBold } from 'react-icons/pi';


const Logout = () => {
    const user = useSelector(selectUser);
 const dispatch = useDispatch();
    const hanleLoggedOut = (e) =>{
        e.preventDefault();
 
        dispatch(logout());

    };  

  return (
    <div className='logout'>
        <div className='logo'>
            <h1><PiHandsPrayingBold className='icon'/>   Welcome  <span className='user__name'> {user.name}</span></h1>
        </div>
      <div className="menu-link">
                <ul>
                    <li className="home"><Link to="/" style={{textDecoration: 'none',color: 'black'}}>Home</Link></li>
                    <li className="service"><Link to="/Service" style={{textDecoration: 'none', color: 'black'}}>Service</Link></li>
                    <li className="about"><Link to="/About" style={{textDecoration: 'none', color: 'black'}}>About</Link></li>
                    <li className="contact"><Link to="/Contact" style={{textDecoration: 'none', color: 'black'}}>Contact</Link></li>
                    <li><button className='logout__btn' onClick={(e) => hanleLoggedOut(e)}>Logout</button></li>
                </ul>
        </div>
      
    </div>
  )
}

export default Logout;
