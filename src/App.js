import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import FriendsList from './components/FriendsList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Route exact path='/'>
          <LoginPage />
        </Route>
        <Route exact path='/friends'>
          <FriendsList />
        </Route>
        
      </Router>
    </div>
  );
}

export default App;
