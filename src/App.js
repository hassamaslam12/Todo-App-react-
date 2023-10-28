import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [inpValue,setInpValue] = useState('')
    const [todoData,setTodoData] = useState([])





  const addTodoHandler = () =>{
    if(inpValue){

      setTodoData(prev => [...prev,inpValue]);
      setInpValue('')
    }

  }


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


  return (
      <div className='documentDiv'>

    <div className='deleteAllDiv'>

      <button onClick={()=>{setTodoData([])}}>DeleteAll</button>
    </div>



        <div className='newTodo'>

           <input value={inpValue} placeholder='Enter todo' onChange={(e) => setInpValue(e.target.value)}/>
           <button onClick={addTodoHandler}>Add</button>
        </div>
   
   <div className='todosToBeRendered'>
    <ul>
      { todoData.length? 
        todoData.map((todo,i) =><li key={i}>{todo}
        <div>
        <button onClick={() => editTodoHandler(i)}>Edit</button>
        <button onClick={()=>deleteTodoHandler(i)}>delete</button>
          </div> 
        </li>):
        'No todos'
      }
    </ul>
   </div>
      </div>
  );
}

export default App;
