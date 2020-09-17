import React from 'react';
import { Link } from '@reach/router';

const Main = (props) => {

  return (
    <>
      <div>
        <h2>
          <Link to='/players/list'>
            List
          </Link>{' '}
          |<Link to='/players/addplayer'>Add Player</Link>
        </h2>
      </div>
        { props.children }
    </>
  );
};

export default Main;
