import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import LoginPage from './components/LoginPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
        <LoginPage />
        </Route>
        
      </Router>
    </div>
  );
}

export default App;
