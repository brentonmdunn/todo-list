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
        <div className='everything'>
            <h1>Todo App</h1>
            <TodoList className='list' todos = {todos} toggleCompleted = {toggleCompleted}/>
            <div className='form-div'>
                <form onSubmit={handleAddTodo}>
                    <div className='text-input-div'>
                        <input className='text-input form-element' ref={todoNameRef} placeholder='name'/>
                        <input className='text-input form-element' ref={todoDesceRef} placeholder='description'/>
                    </div>
                    <button className='add-button form-element' type='submit'>Add task</button>
                </form>
            </div>    

            <div>{todos.filter(todo => !todo.complete).length} tasks left</div>
        </div>

    )
}
