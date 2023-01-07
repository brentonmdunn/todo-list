import React, { useState } from 'react'
import Todo from './Todo.js'

export default function TodoList({ todos, toggleCompleted }) {
    return (
        todos.map(todo => {
            return <Todo key={todo.id } todo={todo} toggleCompleted = {toggleCompleted} />
        })
    );
}
