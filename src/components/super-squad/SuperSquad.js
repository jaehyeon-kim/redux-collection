import React, { Component } from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import SquadStats from './SquadStats';
import './SuperSquad.css';

class SuperSquad extends Component {
  render() {
    return (
      <div className="super-squad">
        <h2>SuperSquad</h2>
        <div className="col-md-4">
          <CharacterList />
        </div>
        <div className="col-md-4">
          <HeroList />
        </div>
        <div className="col-md-4">
          <SquadStats />
        </div>
      </div>
    );
  }
}

export default SuperSquad;
