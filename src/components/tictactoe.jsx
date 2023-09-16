import React, { useState } from 'react'


function TicTacToe (props) {

    let [turn, SetTurn] = useState("x")
    let cells = []

    //Storing all the cells in cells array
    function storeElements(el){
        cells.push(el)
    }

    // disable all the classes on win or tie
    function disable(){
        cells.forEach((cell) =>{
            cell.classList.add('disable')
            cell.disabled = 'disabled'
        })
    }
    
    function cellHandler(event){
        //Updating Cells value and chnaging the turn
        if(turn === 'X'){
            event.target.innerHTML = 'X'
            SetTurn("O")
        }
        else{
            event.target.innerHTML = 'O'
            SetTurn("X")
        }

        // Validating that three cells have equal value and and declaring winner
        let temp = cells
        for(let i=0; i<9; i+=3){

            if((temp[i].innerHTML === 'X' && temp[i+1].innerHTML === 'X' && temp[i+2].innerHTML ==='X') ||
                (temp[i].innerHTML === 'O' && temp[i+1].innerHTML === 'O' && temp[i+2].innerHTML ==='O') ){

                    temp[i].classList.add('tie')
                    temp[i+1].classList.add('tie')
                    temp[i+2].classList.add('tie')
                    disable()

            }
        }
        for(let i=0; i<3; i++){
            console.log(i, i+3, i+6)
            if((temp[i].innerHTML === 'X' && temp[i+3].innerHTML === 'X' && temp[i+6].innerHTML ==='X') ||
                (temp[i].innerHTML === 'O' && temp[i+3].innerHTML === 'O' && temp[i+6].innerHTML ==='O') ){
                    temp[i].classList.add('tie')
                    temp[i+3].classList.add('tie')
                    temp[i+6].classList.add('tie')
                    disable()

            }
        }

        if((temp[0].innerHTML === 'X' && temp[4].innerHTML === 'X' && temp[8].innerHTML ==='X') ||
                (temp[0].innerHTML === 'O' && temp[4].innerHTML === 'O' && temp[8].innerHTML ==='O') ){
                    temp[0].classList.add('tie')
                    temp[4].classList.add('tie')
                    temp[8].classList.add('tie')
                    disable()

            }
    if((temp[2].innerHTML === 'X' && temp[4].innerHTML === 'X' && temp[6].innerHTML ==='X') ||
        (temp[2].innerHTML === 'O' && temp[4].innerHTML === 'O' && temp[6].innerHTML ==='O') ){
            temp[2].classList.add('tie')
            temp[4].classList.add('tie')
            temp[6].classList.add('tie')
            disable()
         }

    event.target.disabled = "disabled"
    }

    // To chnaging the turn to X
    function handleTurn(event){
        SetTurn("X")
        event.target.innerHTML = "Set to X's Turn"
        event.target.disabled = "disabled"
    }

    return (
        <>
        <button onClick={handleTurn} className='bg-amber-400 m-4 p-2 font-semibold text-lg'>Change turn to <span className="font-bold text-xl">X</span></button>

        <div className='flex flex-col sm:grid sm:grid-rows-3'>
            <div className='flex sm:grid sm:grid-cols-3'>
                <button ref={storeElements}  onClick={cellHandler} className='cell border-r-2 border-b-2'></button>
                <button ref={storeElements}  onClick={cellHandler} className='cell border-r-2 border-b-2'></button>
                <button ref={storeElements}  onClick={cellHandler} className='cell border-b-2'></button>
            </div>
            <div className='flex sm:grid sm:grid-cols-3'>
                <button ref={storeElements} onClick={cellHandler} className='cell border-r-2 border-b-2'></button>
                <button ref={storeElements} onClick={cellHandler} className='cell border-r-2 border-b-2'></button>
                <button ref={storeElements} onClick={cellHandler} className='cell border-b-2'></button>
            </div>
            <div className='flex sm:grid sm:grid-cols-3'>
                <button ref={storeElements} onClick={cellHandler} className='cell border-r-2'></button>
                <button ref={storeElements} onClick={cellHandler} className='cell border-r-2'></button>
                <button ref={storeElements} onClick={cellHandler} className='cell'></button>
            </div>
        </div>
        <h3 className='m-4 p-2 bg-amber-800 text-lime-300 font-semibold text-lg'>Refresh Page to Restart</h3>
        </>
)}


export default TicTacToe;