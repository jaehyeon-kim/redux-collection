import React, { Component } from 'react';
import { connect } from 'react-redux';

class SquadStats extends Component {
  spec(prop) {
    return this.props.heroes.reduce((x, y) => x + y[prop], 0);
  }

  render() {
    return (
      <div>
        <h4>Squad Stats</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Overall Strength:</b> {this.spec('strength')}
          </li>
          <li className="list-group-item">
            <b>Overall Intelligence:</b> {this.spec('intelligence')}
          </li>
          <li className="list-group-item">
            <b>Overall Speed:</b> {this.spec('speed')}
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log('state', state);
  return {
    heroes: state.heroes,
  };
}

export default connect(mapStateToProps, null)(SquadStats);
