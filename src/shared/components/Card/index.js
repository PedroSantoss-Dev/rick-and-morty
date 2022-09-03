import * as C from "./styles";

export const Card = (props) => {
    return(
        <C.Cartao>
            <C.Img src={props.img}/>
            <C.Content>
                <C.Item>{props.name}</C.Item>
                <C.Item>{props.status}</C.Item>
                <C.Item>{props.gender}</C.Item>
            </C.Content>
        </C.Cartao>
    )
}