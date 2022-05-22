import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import {Nav, Links, Link} from './styledComponent';

// import { Container } from './styles';

const Navbar = () =>{
    return (
        <Nav>
         
          <Links>
            <Link to="/">Home</Link>
            <Link to="/list">List</Link>
          </Links>
        </Nav>
      )
}

export default Navbar;