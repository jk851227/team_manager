import React from 'react';
import axios from 'axios';

const DeleteBtn = props => {
    const { id, success } = props;

    const deletePlayer = e => {
        axios.delete(`http://localhost:8000/api/players/${id}`)
            .then(res => {
                success();
                console.log(res);
            })
            .then(alert("Are you sure?"))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <button onClick={ deletePlayer }>Delete</button>
        </div>
    )
}

export default DeleteBtn
