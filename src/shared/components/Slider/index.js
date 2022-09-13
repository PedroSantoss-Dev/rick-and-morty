import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import * as S from "./style"


const Slideshow = () => {
  const images = [
    {
      url: 'https://img.estadao.com.br/thumbs/640/resources/jpg/5/0/1557958505405.jpg',
    },
    {
      url: 'https://imagensemoldes.com.br/wp-content/uploads/2021/04/Logo-Rick-and-Morty-PNG.png',
    },
    {
      url: 'https://www.sofilmesgratis.com/wp-content/uploads/2021/07/Gravity-Falls.jpg',
    },
  ];

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
    
  }
  return (
    <S.Slide>
      <Zoom className='slide_zoon' {...zoomOutProperties}>
        { images.map((each, index) => (
            <>
            <S.Img key={index}  src={each.url} />
            <S.Name>{each.nome}</S.Name>
            </>
        ))}
      </Zoom>
    </S.Slide>
  )
}
export default Slideshow