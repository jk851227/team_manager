import React, { useState } from 'react';
import { Router, Link, navigate } from '@reach/router';
import axios from 'axios';
import ManagePlayers from './views/ManagePlayers';
import Status from './components/Status';
import PlayerList from './components/PlayerList';
import Form from './components/Form';

function App() {
  const [errors, setErrors] = useState({
    name: '',
    pref_position: '',
  });
  const createPlayer = (player) => {
    axios
      .post('http://localhost:8000/api/players', player)
      .then((res) => {
        if (res.data.errors) {
          setErrors(res.data.errors);
        } else {
          navigate('/players/list');
        }
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
      <div>
        <h1>
          <Link to='/players'>Manage Players</Link> | 
          <Link to="/status">Manage Player Status</Link>
        </h1>
      </div>
      <Router>
          <ManagePlayers path='players'>
            <PlayerList path="/list" />
            <Form path="/addplayer" submitProp={ createPlayer } nameProp="" prefPosProp="" errors={ errors } />
          </ManagePlayers>
          <Status path="status" />
      </Router>
    </>
  );
}

export default App;
