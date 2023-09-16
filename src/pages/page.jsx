import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Page (props) {

    return (
        <React.Fragment>
            <div className='flex bg-cyan-300 w-screen h-screen justify-center items-center'>
                <h1 className='bg-amber-600 text-white text-8xl font-bold rounded-sm p-2 w-fit'>Page</h1>
                <Link to="/">Home</Link>
            </div>
        </React.Fragment>
)}


export default Page