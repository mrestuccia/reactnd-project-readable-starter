import React from 'react';


const Vote = ({ id, func, parentId}) => {

    const onClick = (option) => {
        func(id, option, parentId)
    }

    return (
        <div>
            <button onClick={ () => onClick('upVote')}>[+]</button>
            <button onClick={ () => onClick('downVote')}>[-]</button>
        </div>

    )
}

export default Vote;