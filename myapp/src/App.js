import logo from './logo.svg';
import './App.css';

import Home from './components/Home'
import {Route , Switch, BrowserRouter as Router,Link} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div className="App"> 

    
    <Router>

      <Link to = "Home"> Home  </Link>
      <Link to = "Login"> Login  </Link>
      <Link to = "Register"> Register  </Link>
      
        <Switch>
         
        <Route path ="/home"> <Home/>
        </Route>
        <Route path ="/Login"> <Login/>
        </Route>
        <Route path ="/Register"> <Register/>
        </Route>
       
             </Switch>
      </Router>
  
    </div>
  );
}

export default App;
