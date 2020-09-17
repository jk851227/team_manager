import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteBtn from './DeleteBtn';
import { navigate } from '@reach/router';

const PlayerList = (props) => {
  const [players, setPlayers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/players')
      .then((res) => {
        setPlayers(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [players]);

  const removeFromList = id => {
      setPlayers(players.filter(player => player._id != id))
  }

  return (
    <div>
      {loaded && (
        <table>
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Preferred Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, idx) => {
              return (
                <tr key={idx}>
                  <td>{player.name}</td>
                  <td>{player.pref_position}</td>
                  <td>
                    <DeleteBtn
                      id={player._id}
                      success={() => removeFromList(player._id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PlayerList;
