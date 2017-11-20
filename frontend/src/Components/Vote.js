import React from 'react';


const Vote = ({ id, func}) => {

    const onClick = (option) => {
        func(id, option)
    }

    return (
        <div>
            <button onClick={ () => onClick('upVote')}>[+]</button>
            <button onClick={ () => onClick('downVote')}>[-]</button>
        </div>

    )
}

export default Vote;