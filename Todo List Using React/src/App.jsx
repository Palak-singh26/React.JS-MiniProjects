import { useState } from 'react';
import './App.css'
// import { ToastContainer, toast } from 'react-toastify';
function App() {
  let [todolist, settodolist] = useState([]);
  let Savetodo = (event) => {

    let todo = event.target.todo.value;
    if (!todolist.includes(todo)) {
      let finaldotolist = [...todolist, todo]
      settodolist(finaldotolist);
    }
    else {
      alert("Todo Name Already exits..")
    }
    event.preventDefault();
  }
  let list = todolist.map((value, index) => {

    return (
      <Todolist value={value} key={index} indexno={index}
        todolist={todolist}
        settodolist={settodolist}
      />
    )
  })
  return (
    <>
      <div className='Todo-list'>
        <h1>Todo List</h1>
        <form onSubmit={Savetodo}>
          <input type="text" name="todo" />
          <button>Save</button>
        </form>
        <div className="outerdiv">
          <ul>
            {list}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App

function Todolist({ value, indexno, todolist, settodolist }) {
  let [status,setstauts]= useState(false)
  let deleteRow = () => {
    let finaldata = todolist.filter((v, i) => i != indexno)
    settodolist(finaldata)
  }
  let checkStatus = () =>{
     setstauts(!status)
  }
  return (
    <>
      <li className={(status)? 'completetodo' : ''} onClick={checkStatus}>{value}<span onClick={deleteRow}>&times;</span></li>
    </>
  )
}