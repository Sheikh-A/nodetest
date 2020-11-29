import React, {useState} from 'react';
import {Route, NavLink} from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Countries from './components/Countrys';
import Flex from './components/Flex';
import FlexShipments from './components/FlexShipments';

import logo from './assets/logo.png';




function App(props) {


    const [logged, setLogged] = useState(localStorage.getItem("token") ? true : false)

    const logout = _ => {
      localStorage.removeItem("token");
      setLogged(false)
    }


  return (
    <div className="App">
      <div className="navigation">
        { logged ? null : <NavLink to = '/register'><button>Register</button></NavLink>}
        { logged ? <NavLink to = '/'><button onClick={logout}>Logout</button></NavLink> : <NavLink to = '/login'><button type="danger">Login</button></NavLink>}
        <NavLink to = '/flexdata'><button >Clients</button></NavLink>
        <NavLink to = '/flexshipments'><button >Shipments</button></NavLink>
        <NavLink to = '/countrieslist'><button >Countries</button></NavLink>
        <NavLink to = '/flexpups'><button >Flex Pups!</button></NavLink>



      </div>
      <Route path = '/register' component = {Register} />
      <Route path = '/login' render = {(props) => <Login {...props} setLogged={setLogged} />} />

      <Route path = '/countrieslist' render = {(props) => <Countries {...props} />} />
      <Route path = '/flexdata' render = {(props) => <Flex {...props} />} />
      <Route path = '/flexshipments' render = {(props) => <FlexShipments {...props} />} />


      <Route exact path = '/' render={() =>
      <div>
        <h1 className="logoheader">🄰🄻🄸🄿🄾🅁🅃</h1>
        <NavLink to='/login'><img className="ship" alt="logo ship" src={logo} /></NavLink>
      </div>
      } />

  </div>
  );
}

export default App;
