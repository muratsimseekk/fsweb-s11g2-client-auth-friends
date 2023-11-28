import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import FriendsList from './components/FriendsList';
import Navbar from './components/Navbar';
import AddFriend from './components/AddFriend';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function App() {
  // const [token , setToken] = useState(localStorage.getItem('token'));

  // useEffect(()=>{
  //   setToken(localStorage.getItem('token'))
  // },[token])

  const token = localStorage.getItem('token')
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Route exact path='/'>
          <LoginPage />
        </Route>
        <Route exact path='/friends'>
          {token ? <FriendsList /> : <Redirect to='/' />}
        </Route>
        <Route exact path='/add'>
        {token ? <AddFriend /> : <Redirect to='/' /> }  
        </Route>
        
      </Router>
    </div>
  );
}

export default App;
