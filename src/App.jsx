import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './screens/login/Login';
import Register from './screens/register/Register';
import Home from './screens/Home';
import './app.css';
import { useSelector } from 'react-redux';

function App() {

  const { logged } = useSelector(state => state.user);

  return (
    <Router>
      <div>
        <Switch>
          {
            logged && <Route exact path="/" component={Home} />
          }
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
