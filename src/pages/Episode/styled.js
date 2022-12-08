import styled from "styled-components";

export const Container = styled.section`
width:100% ;
height:100vh ;
display: flex;
@media (max-width: 600px) {
    height:100%;
    justify-content:center;
    align-items: center;
    flex-direction: column;
}
`;
export const Content = styled.div`
width:75% ;
display: flex;
background-color: black;
`;
export const filter = styled.div`
width:25%;
display: flex;
justify-content:center;
`;
