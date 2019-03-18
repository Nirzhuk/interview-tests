import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
padding: 10px;
width: 250px;
margin-bottom: 10px;
`
const InputSearch = (props) => {
  return (
    <Input
    type="text" 
    placeholder={props.placeholder}/>
  )
}

export default InputSearch
