import { useNavigate } from "react-router-dom";
import * as C from "./styles";


export const Card = (props) => {

    const navigate = useNavigate();
    const goToInfoPage = () => {
        navigate(`/info/${props.id}`)
    }

    const Status = () => {
        if(props.status === "Alive"){
            return "Alive"
        }
        if(props.status === "Dead"){
            return "Dead"
        }
        if(props.status === "unknown"){
            return "unknown"
        }
    } 
    return(
       

        <C.Cartao onClick={goToInfoPage}>
            <C.Img src={props.img}/>
            <C.Item status ={Status()}>{props.status}</C.Item>
            <C.Content>
                <C.Name>{props.name}</C.Name>
            </C.Content>
        </C.Cartao>
        
        
    )
}