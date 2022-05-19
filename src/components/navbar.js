import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby'

// import { Container } from './styles';

const Navbar = () =>{
    return (
        <nav>
         
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/list">List</Link>
          </div>
        </nav>
      )
}

export default Navbar;