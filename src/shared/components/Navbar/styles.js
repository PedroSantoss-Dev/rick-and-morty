import { Link } from "react-router-dom";
import styled from "styled-components";



export const Nav = styled.nav`
width: 100%;
display: flex;
justify-content: center;
`;
export const Menu = styled.ul`
display: flex;
margin-right: 1rem;
`
export const List = styled.li`
list-style: none;
margin: 1rem;
`
export const Btn = styled(Link)`
text-decoration: none;
color: black;
border: none;
border-radius:0.2rem;
width: 3rem;
height: 1.3rem;
cursor: pointer;
` 