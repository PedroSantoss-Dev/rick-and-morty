import React, { useEffect } from 'react';
import { useState } from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Api from '../../service/api';
import * as S from "./style"


const Slideshow = () => {
 const [ images , setImages ] = useState([])

   const data = async () => {
   await Api.get('character/1,183,16')  
   .then(results => {
    setImages(results.data)
   }).catch((err) => console.log(err))
  }

  
  useEffect(() => {
    data()
  })


  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
    
  }
  return (
    <S.Slide>
      <Zoom className='slide_zoon' {...zoomOutProperties}>
        { images.map((each, index) => (
            <>
            <S.Img key={index}  src={each.image} />
            <S.Name>{each.nome}</S.Name>
            </>
        ))}
      </Zoom>
    </S.Slide>
  )
}
export default Slideshow