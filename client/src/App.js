import React from 'react';
import { Router, Link } from '@reach/router';
import ManagePlayers from './views/ManagePlayers';

function App() {
  return (
    <>
      <div>
          <h1><Link to="/players/list">Manage Players</Link> | Manage Player Status</h1>
      </div>
      <Router>
        <ManagePlayers path="/players/list" />
      </Router>
    </>
  );
}

export default App;
