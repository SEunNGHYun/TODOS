import React from 'react'

export default function Completed({ completed }) {
    return (
        <div>
            {completed.map((todoObj, index) => {
                if (todoObj.check === true) {
                    return <div key={index} className="completed">{todoObj.todo}</div>
                }
            })}
        </div>
    )
}
