import React from 'react'
import { Link } from 'react-router-dom'

function Heading (props) {

    return (
        <>
            <div className='bg-blue-500'>
                <h1 className='text-xl font-bold'>This large heading</h1>
                <h3 className='text-xl font-bold'>This is h3 heading</h3>
                <Link to="/">Home</Link>
            </div>
        </>
)}


export default Heading;