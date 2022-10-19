import React from 'react'

const Props = ({ cellno , snake,ladder,player1,player2,winner }) => {
    
    return (
        <>
        <h1>{cellno}</h1>
        <h1>{snake}</h1>
        <h1>{ladder}</h1>
        <h1>{player1}</h1>
        <h1>{player2}</h1>
        {/* <h1>{player1score}</h1>
        <h1>{player2score}</h1> */}
        <h1>{winner}</h1>
        </>
    )
}

export default Props