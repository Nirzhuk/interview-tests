import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  min-width: 250px;
  margin: 10px;
  border-radius: 4px;
  box-shadow: 0px 5px 15px rgba(0,0,0,0.25);
`
const CardPoster = styled.img`
  height: auto;
  width: 250px;
  border-radius: 4px 4px 0px 0px;
`;
const CardInfo = styled.div`
  height: 100px;
  padding: 16px;
`
const CardDataLine = styled.p`
  margin: 0;
`
const Card = (props) => {
  return (
    <CardContainer>
      <CardPoster src={props.poster}/>
      <CardInfo>
      <CardDataLine>Title: <strong>{props.title}</strong></CardDataLine>
      <CardDataLine>Director: <strong>{props.director}</strong></CardDataLine>
      <CardDataLine>Year: <strong>{props.year}</strong></CardDataLine>
      </CardInfo>
    </CardContainer>
  )
}

export default Card
