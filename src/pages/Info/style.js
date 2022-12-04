import { Link } from "react-router-dom";
import styled from "styled-components";

 
 
 export const Content = styled.main`
  width:100%;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b0d54;

 `;
 export const Perfil = styled.section`
 width:16rem;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 `;


 export const Self = styled.img`
 height:7rem;
 border-radius: 50%;
 margin-bottom: 2rem;
 `;
 export const info = styled.h4`
 font-size:0.8em;
 color: red;
 margin:0.5rem;
 ${({  status }) =>  status && `
 color: green;
`}
 `;
 export const Name = styled.h1`
 font-size:1.2em;
 color: #1ce5ef;
 `;
 export const Description = styled.h5`
 color: #1ce5ef;
 `;
 export const voltar = styled(Link)`
 text-decoration: none;
 color: #1ce5ef;

 `;