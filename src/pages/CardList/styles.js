import styled from "styled-components";

export const Container = styled.main`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 5rem;
`;
export const Pagination = styled.section`
width: 100%;
height: 4rem;
display: flex;
margin-bottom: 2rem;
justify-content: center;
align-items: center;
`;
export const Btn = styled.button`
width: 3rem;
cursor :pointer;
border: none;
background-color: transparent;
color:  black ;
margin: 0.5rem;
 &:hover{
   color:  rgb(0, 247, 255);
   background-color: rgba(210, 240, 240, 0.747);
   transform: scale(1.5);
   border-radius: 0.5rem;
  border-bottom: solid rgba(0, 0, 0, 0.514);
   
}`;
