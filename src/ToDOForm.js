import React,{useState} from 'react'


const ToDoForm = ({addTask}) => {

    const [userinput,setUserinput] = useState('')
    const handleChange = (e) =>{
        setUserinput(e.currentTarget.value)
    }

    const handleSubmit = (e) =>{
       // e.preventDefault();
        addTask(userinput);
        setUserinput("")
    }
    
  return (
    <div>
      <input value={userinput} type="text" onChange={handleChange} placeholder="Enter task..."/>
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  )
}

export default ToDoForm

// import React, { useState } from "react";

// const ToDoForm = ({ addTask }) => {
//   const [userinput, setUserinput] = useState("");

//   const handleChange = (e) => {
//     setUserinput(e.currentTarget.value);
//   };

//   const handleSubmit = () => {
//     addTask(userinput);
//     setUserinput("");
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter your task"
//         onChange={handleChange}
//         value={userinput}
//       />
//       <button onClick={handleSubmit}>Add Task</button>
//     </div>
//   );
// };

// export default ToDoForm;