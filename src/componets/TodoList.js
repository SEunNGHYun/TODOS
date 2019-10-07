import React from 'react'

export default function TodoList({ todoList, hanldeClickTodo, handleDelete }) {
    return (
        <div >
            {todoList.map((todoObj, index) =>
                <div>
                    <span className="todoList" key={index} style={todoObj.check ? { color: "red" } : { color: "black" }}
                        onClick={e => hanldeClickTodo(e)} id={index}>{todoObj.todo}</span>
                    <button onClick={e => handleDelete(e)} id={index}>삭제!</button>
                </div>
            )}
        </div >
    )
}
