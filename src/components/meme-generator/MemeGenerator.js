import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import MemeItem from './MemeItem';
import MyMemes from './MyMemes';
import './MemeGenerator.css';

class MemeGenerator extends Component {
  constructor() {
    super();

    this.state = {
      memeLimit: 10,
      text0: '',
      text1: '',
    };
  }

  render() {
    return (
      <div>
        <h2>
          <u>Welcome to the Meme Generator!</u>
        </h2>
        <MyMemes />
        <h4>
          <i>Write Some Text</i>
        </h4>
        <Form inline>
          <FormGroup>
            <FormLabel>Top</FormLabel>
            {'  '}
            <FormControl
              type="text"
              onChange={(event) => this.setState({ text0: event.target.value })}
            ></FormControl>
            {'  '}
            <FormLabel>Bottom</FormLabel>
            {'  '}
            <FormControl
              type="text"
              onChange={(event) => this.setState({ text1: event.target.value })}
            ></FormControl>
          </FormGroup>
        </Form>
        {this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
          return (
            <MemeItem
              key={index}
              meme={meme}
              text0={this.state.text0}
              text1={this.state.text1}
            />
          );
        })}
        <div
          className="meme-button"
          onClick={() => {
            this.setState({ memeLimit: this.state.memeLimit + 10 });
          }}
        >
          Load 10 more memes...
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    memes: state.memes,
  };
}

export default connect(mapStateToProps, null)(MemeGenerator);
