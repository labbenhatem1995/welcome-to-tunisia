import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PrivateSpace from "./pages/PrivateSpace"
import {Route, Switch} from 'react-router-dom';
import Error from './pages/Error';
import Governorate from "./pages/Governorate";
import Profil from "./pages/Profil";
import Login from "./pages/Login";
import Signup from "./pages/Signup"

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/tunisia' component={PrivateSpace}/>
        <Route exact path='/tunisia/:name' component={Governorate}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path='/profil' component={Profil}/>
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;