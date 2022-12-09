import styled from "styled-components";
import { Link } from "react-router-dom";

export const Direct = styled(Link)`
text-decoration:none;
`;
export const Cartao = styled.section
`
position: relative;
width: 12rem;
height: 14rem;
display: flex;
justify-content: center;
flex-direction: column;
@media (max-width: 600px) {
    width: 7rem;
    height: 9rem;
    justify-content:center;
    align-items: center;
    flex-direction: column;
}

`;
export const Img = styled.img`
width: 100%;
height: 8rem;
@media (max-width: 600px) {
    height: 5rem;  
}
`;
export const Content = styled.ul`
width: 100%;
`;
export const Name = styled.li`
list-style: none;
`
export const Item = styled.li`
list-style: none;
position: absolute;
top: 50px;
right: 10px;
${({  status }) =>  status === "Alive" &&`
text-shadow: 1px 1px 2px #045903, 0 0 1em #24b714, 0 0 0.2em blue;
color: #62e574;
font: 1em Georgia, "Bitstream Charter", "URW Bookman L", "Century Schoolbook L", serif;
@media (max-width: 600px) {
    top: 25px;
}
`}
${({  status }) =>  status === "Dead" &&`
color: red;
text-shadow: 1px 1px 2px black, 0 0 1em #750e0e, 0 0 0.2em blue;
color: #d30808;
font: 1em Georgia, "Bitstream Charter", "URW Bookman L", "Century Schoolbook L", serif;
@media (max-width: 600px) {
    top: 25px;
}
`}
${({  status }) =>  status === "unknown" &&`
text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #87CEFA, 0 0 0.2em blue;
color: #0a0e6d;
font: 1em Georgia, "Bitstream Charter", "URW Bookman L", "Century Schoolbook L", serif;
@media (max-width: 600px) {
    top: 25px;
}
`}
`