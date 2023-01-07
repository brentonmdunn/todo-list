import React from 'react'

export default function Todo({ todo, toggleCompleted }) {
    
    function handleChecked(e) {
        // e.preventDefault();
        toggleCompleted(todo.id)
    }
    
    return (
        <>
            <label>
                <input type='checkbox' checked={todo.completed} onChange={handleChecked} />
                {todo.name} | {todo.description}
            </label>
        </>
    )
}
