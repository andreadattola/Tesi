import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';


export default function NavBar(){

    return(
        <>
        <nav className="navbar navbar-light bg-light">
        <Link to= '/' className="navbar-brand">Home</Link>
        <Link to= '/About' className="navbar-brand">About</Link>
        <Link to= '/Info' className="navbar-brand">Info</Link>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
        </>
    )
}