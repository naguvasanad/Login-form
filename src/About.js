import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUser } from './features/userSlice';

const About = () => {
    const user = useSelector(selectUser);
  return (
    <div>
      <h1>About page <span className='user__name'> {user.name}</span>.</h1>
    </div>
  )
}

export default About;
