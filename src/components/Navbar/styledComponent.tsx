import styled from 'styled-components';
import { Link as GatsbyLink } from "gatsby";



export const Nav = styled.nav`
display: grid;
grid-template-columns: 1fr 1fr;
margin: 40px auto;
`
export const Links = styled.div`
display: inline-block;
text-align: right;
`
export const Link = styled(GatsbyLink)`
display: inline-block;
margin-left: 20px;
font-weight: 400;
padding-bottom: 8px;
border-bottom: 3px solid transparent;

`
