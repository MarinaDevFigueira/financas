import React ,{useState,useEffect}from 'react'
import GlobalStyle from "./styles/global"
import Header from './components/Header'
import Resume from './components/Resume'
import Form from './components/Form'

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList ,setTransactionList]= useState(
    data ? JSON.parse(data):[]
  );

  const [income,setIncome]=useState(0);
  const [expence, setExpence] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(()=>{
   const amountExpence= transactionsList.filter((item)=> item.expence)
   .map((transaction)=> Number(transaction.amount))

    const amountIncome = transactionsList
     .filter((item) => !item.expence)
     .map((transaction) => Number(transaction.amount))

     const expence= amountExpence.reduce((acc,cur)=>acc+cur,0).toFixed(2)
     const income= amountIncome.reduce((acc,cur)=>acc +cur,0).toFixed(2)

     const total = Math.abs(income -expence).toFixed(2)

     setIncome(`R$ ${income}`)
    setExpence(`R$ ${expence}`)
    setTotal(`${Number(income)< Number(expence)? "-" : ""}R$ ${total}`)
  },[transactionsList])

  const handleAdd= (transaction)=>{
    const newArrayTransactions=[...transactionsList,transaction]

    setTransactionList(newArrayTransactions);
    localStorage.setItem("transactions",JSON.stringify(newArrayTransactions))
  }

  return (
    <>
   <Header/>
   <Resume income={income} expence={expence} total={total}/>
   <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionList={setTransactionList}/>
    <GlobalStyle/>
    </>
  )
}

export default App
