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
        const description = todoDesceRef.current.value;
        console.log(name);
        if (name === "") {
            return;
        }
        setTodos(prevTodos => {
            return[...prevTodos, {id: uuidv4(), 
                    name: name, 
                    complete: false, 
                    description: description}]
        })

        todoNameRef.current.value = null; 
        todoDesceRef.current.value = null;
    }

    function toggleCompleted(id) {
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    return (
        <>
            <TodoList todos = {todos} toggleCompleted = {toggleCompleted}/>
            
            <form onSubmit={handleAddTodo}>
                <input ref={todoNameRef} placeholder='name'/>
                <button type='submit'>Add</button>
                <input ref={todoDesceRef} placeholder='description'/>
            </form>

            <div>{todos.filter(todo => !todo.complete).length} tasks left</div>
        </>

    )
}
