import React from 'react';


const Vote = ({ id, func, score}) => {

    const onClick = (option) => {
        func(id, option)
    }

    return (
        <span className="score">
            <button className='glyphicon glyphicon-minus' onClick={ () => onClick('downVote')}></button>
            <span>{score}</span>
            <button className='glyphicon glyphicon-plus' onClick={ () => onClick('upVote')}></button>
        </span>
    )
}

export default Vote;