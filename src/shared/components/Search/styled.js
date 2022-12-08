import styled from "styled-components";

import { BsSearch } from 'react-icons/bs';



export const SearchConatainer = styled.form`
width: 13rem;
height: 2rem;
box-shadow: 1px 3px 9px rgba($color: #000000, $alpha: 0.25);
border: 2px solid #0b5ed7;
border-radius: 8px;
display: flex;
justify-content:center;
align-items: center;
&:focus {
    outline: none;
}
`;
export const Search = styled.input`
width: 10rem;
border: none;
&:focus {
  outline: none;
}

`;
export const SearchBtn= styled(BsSearch)`
box-shadow: 1px 3px 9px rgba($color: #000000, $alpha: 0.25);
`;
