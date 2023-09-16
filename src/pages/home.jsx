import React from 'react'
import HomeNavbar from '../components/navbar'
import Heading from '../components/heading'
import { Link } from 'react-router-dom'
import TicTacToe from '../components/tictactoe'

function Home (props) {

    return (
        <React.Fragment>
            <div className='flex flex-col pattern w-screen h-full justify-center items-center'>
                <TicTacToe></TicTacToe>
            </div>
            
        </React.Fragment>
)}


export default Home