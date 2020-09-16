import React, { useState } from 'react';
import { Router, Link, navigate } from '@reach/router';
import PlayerList from '../components/PlayerList';
import Form from '../components/Form';
import axios from 'axios';

const Main = () => {
    const [ errors, setErrors ] = useState({
        name: '',
        pref_position: ''
    })

    const createPlayer = player => {
        axios.post('http://localhost:8000/api/players', player)
            .then(res => {
                if(res.data.errors){
                    setErrors(res.data.errors)
                } else {
                    navigate("/players/list")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div>
                <h2>
                    <Link to="/players/list">List</Link> | 
                    <Link to="/players/addplayer">Add Player</Link>
                </h2>
            </div>
            <PlayerList />
            <Router>
                <Form path="/players/addplayer" submitProp={ createPlayer } nameProp="" prefPosProp="" errors={ errors } />
            </Router>
        </>
    )
}

export default Main
