import React from 'react';
import Button from '../Button/Button';
import { useState } from 'react';


const TodoItem = ({todoData,setTodoData}) => {
    // const [todoData,setTodoData] = useState([])

    const deleteTodoHandler = (index) =>{

  const newData = todoData.filter((e,i)=>i!==index);
  setTodoData(newData);
  // console.log(index);


}
const editTodoHandler = (index) =>{
  let temp = prompt("Please enter new value");
  const newData = [...todoData];
  newData[index] = temp;
  setTodoData(newData)
}

  return (<div className='todosToBeRendered'>
  <ul>
    { todoData.length? 
      todoData.map((todo,i) =><li key={i}>{todo}
      <div>
        <Button value='Edit' action={() => editTodoHandler(i)}/>
        <Button value='Delete' action={() => deleteTodoHandler(i)}/>
      {/* <button onClick={() => editTodoHandler(i)}>Edit</button>
      <button onClick={()=>deleteTodoHandler(i)}>delete</button> */}
        </div> 
      </li>):
      'No todos'
    }
  </ul>
 </div>
  )
}

export default TodoItem
