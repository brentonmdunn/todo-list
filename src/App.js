import './App.css';
import TodoList from './TodoList.js';
import { v4 as uuidv4 } from 'uuid';
import React, { useRef, useState } from 'react';

export default function App() {

    const todoNameRef = useRef();
    const todoDesceRef = useRef();

    const [todos, setTodos] = useState([])

    function handleAddTodo(e) {
        e.preventDefault();
        const name = todoNameRef.current.value;
        console.log(name);
        if (name === "") {
            return;
        }
        setTodos(prevTodos => {
            return[...prevTodos, {id: uuidv4(), name: name, complete: false}]
        })

        todoNameRef.current.value = null; 
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Handle");

    }

    function handleClear(e) {
        e.preventDefault();
    }

    return (
        <>
            <TodoList todos = {todos}/>
            {/* <input type='text' ref={todoNameRef}></input>
            <button onClick={handleAddTodo}>Add</button> */}
            {/* <button onClick={handleClear}>Clear</button> */}

            <form onSubmit={handleAddTodo}>
                <input ref={todoNameRef} placeholder='name'/>
                <button type='submit'>Add</button>
                {/* <input ref={todoDesceRef} placeholder='description'/> */}
            </form>

            <div>{todos.length} tasks left</div> 
        </>

    )
}
