import { useEffect, useState } from "react";
import Api from "../../service/api"

export const CardList = () => {
    const [ character, setCharacter ] = useState([]);
 
    const getData = () => {
       Api.get('/character')
       .then((response) => {
        setCharacter(response.data)
       })
    }

    useEffect(() => {
        getData()
    },[])

    return(
        <main>
        </main>
    )
}