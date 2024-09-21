import React, {useState} from 'react';

function ToDoList(){

    const X = './src/assets/X.png';
    const pointerUp = './src/assets/pointerup.png';
    const pointerDown = './src/assets/pointerdown.png';
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask (event.target.value)
    }

    function addTask(){

        if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask]);
        setNewTask("");
        }
    }

    function deleteTask(index){

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(<div className="to-do-list">

        <div className="insertArea">
        <h1>To-Do-List</h1>
        <div>
            <input
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}/>

            <button className="add-button"
                    onClick={addTask}>
                insert
            </button>
        </div>
        

        

        <ol>
        <div className="option-container">
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <div className="delBtnCointainer">
                    <button 
                        className="delete-button"
                        onClick={() => deleteTask(index)}>
                        <img src={X}></img>
                    </button>
                    </div>
                    <button 
                        className="move-button"
                        onClick={() => moveTaskUp(index)}>
                        <img src={pointerUp}></img>
                    </button>
                    <button 
                        className="move-button"
                        onClick={() => moveTaskDown(index)}>
                        <img src={pointerDown}></img>
                    </button>
                </li>)}
                </div>
        </ol>
        
        </div>

    </div>)
}
export default ToDoList