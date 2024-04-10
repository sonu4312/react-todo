import './App.css';
import Header from './Header';
import data from './data.json';
import ToDoList from './ToDoList';
import {useState} from 'react'
import ToDoForm from './ToDOForm';

function App() {
  const [toDoList,setToDoList] = useState(data);
  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  }
  

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }
  
  return(
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleFilter = {handleFilter} handleToggle ={handleToggle}/>
      <ToDoForm addTask={addTask}/>
      </div>
  )
  
}

export default App;
