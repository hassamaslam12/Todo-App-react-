import React from 'react';
import './Input.css'
import { useState } from 'react';
import Button from '../Button/Button';
import TodoItem from '../TodoItems/TodoItem';


const Input = () => {
    const [inpValue,setInpValue] = useState('')
    const [todoData,setTodoData] = useState([])





  const addTodoHandler = () =>{
    if(inpValue){

      setTodoData(prev => [...prev,inpValue]);
      setInpValue('')
    }

  }





  return (
      <div className='documentDiv'>

          <div className='deleteAllDiv'>
            <Button value='DeleteAll' action={()=>{setTodoData([])}} />
          </div>
          
          <div className='newTodo'>
            <input value={inpValue} placeholder='Enter todo' onChange={(e) => setInpValue(e.target.value)}/>
            <Button value='Add' action={addTodoHandler} />
          </div>  
          
          <TodoItem todoData={todoData} setTodoData={setTodoData}/>

      </div>)
      }

export default Input
