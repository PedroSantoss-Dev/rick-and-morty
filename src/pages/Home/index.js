import * as S from "./styled"
import { Search } from "../../shared/components/Search"
import { Card } from "../../shared/components/Card"
import Api from "../../shared/service/api"
import { useEffect, useState } from "react"


export const Home = () => {
    const [pageNumber, updatePageNumber] = useState(1);
    const [status, updateStatus] = useState("");
    const [gender, updateGender] = useState("");
    const [species, updateSpecies] = useState("");
    const [character, setCharacter] = useState([]);
    const [search, setSearch] = useState("");
  
  
     const getData = async() => {
      await Api.get(`character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`)
      .then(response => {
        setCharacter(response.data.results)
      })
     }
     let api = Api.get(`character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`)
    useEffect(() => {
      getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [api]);
    return(
        <S.Container>
            <S.filter>
                <Search setSearch={setSearch} updatePageNumber={updatePageNumber}/>
            </S.filter>
            <S.Content>
            {
                character.map((item) => (
                    <Card 
                     key ={item.id}
                     id = {item.id}
                     name = {item.name}
                     img = {item.image}
                     status = {item.status}
                     gender = { item.gender}
                     />
                ))
            }
            </S.Content>
        </S.Container>
    )
}