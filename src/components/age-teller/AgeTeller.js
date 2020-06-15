import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './AgeTeller.css';
import AgeStats from './AgeStats';

class AgeTeller extends Component {
  constructor() {
    super();

    this.state = {
      newDate: '',
      birthday: '1992-06-21',
      showStats: false,
    };
  }

  changeBirthday() {
    this.setState({ birthday: this.state.newDate, showStats: true });
  }

  render() {
    return (
      <div className="AgeTeller">
        <Form inline>
          <h2>Input Your Birthday!</h2>
          <FormControl
            type="date"
            onChange={(event) =>
              this.setState({ newDate: event.target.value, showStats: false })
            }
          ></FormControl>{' '}
          <Button onClick={() => this.changeBirthday()}>Submit</Button>
          {this.state.showStats ? (
            <div className="fade age-stats">
              <AgeStats date={this.state.birthday} />
            </div>
          ) : (
            <div></div>
          )}
        </Form>
      </div>
    );
  }
}

export default AgeTeller;
