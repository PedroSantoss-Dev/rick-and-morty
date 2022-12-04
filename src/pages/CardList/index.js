import { useEffect, useState } from "react";
import Api from "../../shared/service/api"
import { Card } from "../../shared/components/Card";
import * as C from "./styles"


export const CardList = () => {
    const [ character, setCharacter ] = useState([]);
    const [ loading, setLoading ] = useState(false)
    const [ page, setPages ] = useState(1)

    const getPage = async () =>{
      if (page >= 42) {
       return page -2
      } else {
        setLoading(true)
        setPages(page + 1) 
      }
    }
    const nextFive = () => {
      if (page >= 37) {
        return -5
      }else{
        setLoading(true)
        setPages(page + 5)
      }
    }
    const prevFive = () => {
      if (page <= 2) {
        return + 5
      }else{
        setLoading(true)
        setPages(page - 5)
      }
    }
    const prevPage = async () =>{
      if (page < 2) {
        return page + 2  
      }else{
        setLoading(true)
        setPages(page - 1) 
      }
      
    }
    async function loadData() {
      setLoading(true);
      const apiResponse = await Api.get(`character/?page=${page}`);

      setCharacter(apiResponse.data.results);
      setLoading(false);
    }

    useEffect(()  =>   {
      loadData();   
    },[loading])
  
    return(
        <C.Container>
          <C.Pagination>
             <C.Btn onClick={prevPage}>&#10094;</C.Btn>
             <C.Btn onClick={prevFive}>-5</C.Btn>
             <C.Btn onClick={nextFive}>+5</C.Btn>
             <C.Btn onClick={getPage}>&#10095;</C.Btn>
          </C.Pagination> 

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
        
        </C.Container>
    )
}