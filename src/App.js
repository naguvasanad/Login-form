import Login from './components/Login';
import Logout from './components/Logout';
import "./App.css"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  const user =useSelector(selectUser);
  return (
  <BrowserRouter>
  <div> 
    {user ? <Logout/> : <Login/>}
   </div>
   <Routes>
    
     <Route index path='/' Component={Home}/>
      <Route path='/Service' Component={Service}/>
      <Route path='/About' Component={About}/>
      <Route path='/Contact' Component={Contact}/>
    

   </Routes>
  </BrowserRouter>
  );
}
  
  

export default App;
