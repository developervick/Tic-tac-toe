import React from 'react'

function Cell (props) {

    return (
        <React.Fragment>

            <button onClick={props.handler} className={`bg-white flex justify-center items-center w-28 h-28 border-gray-400 ${props.borderClass} `}>
                <div id={props.id} className='text-7xl font-bold'>{props.value}</div>
            </button>
        </React.Fragment>
)}


export default Cell;