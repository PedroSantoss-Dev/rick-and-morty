import * as S from "./styled"

export const Select = ({name, ChangeId, total}) => {
    return(
        <S.SelectContainer>
            <S.Select
            onChange={(e) => ChangeId(e.target.value)}
            id={name}
            >
            <option value={1}> Choose</option>
            {
                [...Array(total).keys()].map((v,i ) => {
                    return(
                        <option value={v + 1}>
                         {name} - {v + 1}
                        </option>
                    )
                })
            }
            </S.Select>
            
        </S.SelectContainer>
    )
}