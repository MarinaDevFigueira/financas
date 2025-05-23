import React,{useState} from 'react'
import * as C from "./styles"

import Grid from "../Grid"

const Form = ({handleAdd,transactionsList,setTransactionList}) => {
  const [desc,setDesc]= useState("")
  const [amount,setAmount]= useState("")
  const [isExpence,setExpence]=useState(false)

  const generateId=()=>Math.round(Math.random()*1000)

  const handleSave=()=>{
    if(!desc || !amount ){
      alert("Informe a descrição e o valor !");
      return;
    }else if(amount < 1 ){
   alert("O valor tem que ser posítivo!");
   return;
    }

    const transaction ={
      id:generateId(),
      desc:desc,
      amount:amount,
      expence:isExpence,
    }

    handleAdd(transaction)
    setDesc("");
    setAmount("")
  }
  return (
    <>
    <C.Container>
      <C.InputContent>
        <C.Label>  Descrição </C.Label>
        <C.Input value={desc} onChange={(e)=>setDesc(e.target.value)}/>
      </C.InputContent>
        <C.InputContent>
          <C.Label>  Valor </C.Label>
          <C.Input value={amount} onChange={(e) => setAmount(e.target.value)} />
        </C.InputContent>

        <C.RadioGroup>
          <C.Input
          type='radio'
          id="rIncome"
          defaultChecked
          name='group1'
          onChange={()=>setExpence(!isExpence)}/>

          <C.Label htmlFor='rIncome'> Entrada</C.Label>
          <C.Input
           type='radio'
           id="rExpenses"
           name='group1'
           onChange={()=> setExpence(!isExpence)}/>
           <C.Label htmlFor='rExpenses'>
            Saída
           </C.Label>
         
        </C.RadioGroup>
        <C.Button onClick={handleSave}>Adicionar</C.Button>
    </C.Container>
    <Grid itens={transactionsList} setItens={setTransactionList}/>
    </>
  )
}

export default Form
