//import React, {useState} from'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
//child of Expenses .js and grant child of Index.js
const ExpenseItem = (props) => {
  // const [title,setTitle]= useState(props.title)
  //  const clickHandler = ()=>{
  //   //  setTitle("Updated!!!")
  //   // console.log(title)
  // }

  
    // const month = props.date.toLocaleString('en-us',{month:'long'});
    // const day = props.date.toLocaleString('en-us',{day:'2-digit'});
    // const Year = props.date.getFullYear();
    
    // const ExpenseDate = new Date();
    // const ExpenseTitle = 'Car Insurance'
    // const ExpenseAmount = 400.50
  return (
    // <div className = "expense-item">
    //   <div>{ExpenseDate.toISOString()}</div>
    //   <div className = "expense-item__description">
    //     <h2>{ExpenseTitle}</h2>
    //     <div className = "expense-item__price "> ${ExpenseAmount}</div>
    //   </div>
    // </div>
    <li>
    <Card className = "expense-item">
        {/* <div>
      <div>{month}</div>
      <div>{Year}</div>
      <div>{day}</div>
      </div> */}
      <ExpenseDate date = {props.date}/>
      <div className = "expense-item__description">
        <h2>{props.title}</h2>
        <div  className = "expense-item__price "> ${props.amount}</div>
      </div>
      {/* <button type="submit"onClick={clickHandler }>Change title</button> */}
    </Card>
    </li>
  );
};

export default ExpenseItem;
