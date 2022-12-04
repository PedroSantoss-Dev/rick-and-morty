import { wait } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import Api from "../../shared/service/api";
import * as S from "./style"


export const Info = () => {
    const [ info, setInfo] = useState([]);

    const {id} = useParams()
     
    const getData = async() => {
       await Api.get(`character/${id}`)
       .then(response => {
        setInfo(response.data)
        })
    }
    console.log(info)
    useEffect(() => {
        getData()
    }, [])
    
     const isAlivie = () =>{
        if(info.status === "Alive"){
         return true   
        }else{
            return false
        }
     }
     console.log(isAlivie())
     return(
        <S.Content>
                <S.Perfil >
                <S.Self src={info.image}/>
                <S.Name>{info.name}</S.Name>
                 <S.info status ={isAlivie()}>{info.status}</S.info>
                 <S.Description >{info.species}</S.Description>
                 <S.Description >{info.type}</S.Description>
                 <S.Description >{info.gender}</S.Description>
                 <S.voltar to='/'>voltar</S.voltar>
            </S.Perfil>
    
            
            
        </S.Content>
     )
}