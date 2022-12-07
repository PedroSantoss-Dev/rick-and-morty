import * as S from "./styled";
import Logo from "../../assets/r&m.png"

export const Logotipo = () => {
    return(
        <S.Header>
            <S.Logo src={Logo} alt="Rick & morty logo"/>
        </S.Header>
    )
}