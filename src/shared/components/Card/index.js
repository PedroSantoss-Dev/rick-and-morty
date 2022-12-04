import { useNavigate } from "react-router-dom";
import * as C from "./styles";


export const Card = (props) => {

    const navigate = useNavigate();
    const goToInfoPage = () => {
        navigate(`/info/${props.id}`)
      }
    return(
       

        <C.Cartao onClick={goToInfoPage}>
            <C.Img src={props.img}/>
            <C.Content>
                <C.Item>{props.name}</C.Item>
                <C.Item>{props.status}</C.Item>
                <C.Item>{props.gender}</C.Item>
            </C.Content>
        </C.Cartao>
        
        
    )
}