import * as S from "./styled"


export const Search = ({setSearch, updatePageNumber}) => {

    let searchBtn = (e) => {
        e.preventDefault();
      };
    return(
        <>
            <S.SearchConatainer>
      <S.Search
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        type="text"
      />
      <S.SearchBtn
        onClick={searchBtn}
      >
        Search
      </S.SearchBtn>
    </S.SearchConatainer>
        </>
    )
}