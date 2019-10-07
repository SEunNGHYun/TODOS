import React from 'react'

export default function OnGoing({ _ing }) {
    return (
        <div>
            {_ing.map((todoObj, index) => {
                if (todoObj.check === false) {
                    return <div key={index} className="ongoing">{todoObj.todo}</div>
                }
            })}
        </div>
    )
}
