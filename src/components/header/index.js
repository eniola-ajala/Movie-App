import React from "react";
import 'materialize-css';
import {Navbar,Icon} from 'react-materialize'
import {NavLink} from 'react-router-dom'


const Index = () => {
  return (
    <div>
      <Navbar
        alignLinks="right"
        brand={
          <a className="brand-logo black-text cloud" href="/">
            Cloud 9
          </a>
        }
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
          
        }}
        fixed={true}
         className="z-depth-0 white"
      >
        <NavLink to='/' className="black-text white"> Home </NavLink>
        <a href="#services" className="black-text "> Services </a>
        <a href="#about" className="black-text"> About Us </a>
        <a href="#contact" className="black-text"> Contact </a>

        <NavLink to='/signup' className="black-text"> Sign Up</NavLink>
        <NavLink to='/signin' className="black-text"> Log In </NavLink>

      </Navbar>
    </div>
  );
};

export default Index;
