import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import FriendsList from './components/FriendsList';
import Navbar from './components/Navbar';
import AddFriend from './components/AddFriend';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
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
