import React from 'react'

export default function AddTodo({ handleAddTodos }) {
    return (
        <div >
            <input type="text" className="inputTodo"></input>
            <button className="addTodoButton" onClick={() => document.querySelector(".inputTodo").value === ""
                ? alert("진짜 할게 없어??") : handleAddTodos(document.querySelector(".inputTodo").value)}>ADD</button>
        </div>
    )
}
