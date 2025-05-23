import React from 'react'
import * as C from "./styles"
import ResumeItem from '../ResumeItem'

import{
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,

}from 'react-icons/fa'
const Resume = ({income,expence,total}) => {
  return (
    <C.Container> 
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income}/>
      <ResumeItem title="Saída" Icon={FaRegArrowAltCircleDown} value={expence} />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  )
}

export default Resume
