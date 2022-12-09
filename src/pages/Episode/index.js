import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../../shared/components/Card";
import { Select } from "../../shared/components/Select"
import Api from "../../shared/service/api";
import * as S from"./styled"

export const Episode = () => {
    const [info, setInfo] = useState([]);
    const [character, setCharacter] = useState([]);
    let{air_date, episode,name}=info
    let [id, setID] = useState(1);
    

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getData = async() => {
        await axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
        .then(response => {
            setInfo(response.data)
        })
        let a = await Promise.all(
            info.characters.map((x) => {
              return fetch(x).then((res) => res.json());
            })
          );
          setCharacter(a)
        
    }
    useEffect(() => {    
        getData()
    },[getData])
    return(
        <S.Container>
            
        <S.filter>
            <Select name="Episode" ChangeId={setID} total={51}/>
        </S.filter>
        <S.Content>
        <h1 className="text-center mb-3">
          Episode name :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <S.CardContainer>
        {
            character.map(v => (
                <Card
                key={v}
                id={v.id}
                name={v.name}
                img={v.image}
                status={v.status}
                gender={v.gender}
                
                />
               
                ))
        }      
      
        </S.CardContainer>    
        </S.Content>
        </S.Container>
    )
}