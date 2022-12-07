import { useState } from "react";
import { Select } from "../../shared/components/Select"
import * as S from"./styled"

export const Episode = () => {
    let [id, setID] = useState(1);
    return(
        <S.Container>
        <S.filter>
            <Select name="Episode" ChangeId={setID} total={51}/>
        </S.filter>
        <S.Content></S.Content>
        </S.Container>
    )
}