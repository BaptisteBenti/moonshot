import React from 'react';

export default class End extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.next = 'Score';
  }
  handleClick() {
    this.props.handleNextScene('Scene' + this.next + 'IsActive');
  }
  render () {
    return (
      <div>
        <h1>YOU LOOSE!</h1>
        <p>🙁</p>
        <button onClick={this.handleClick}>RESTART</button>
      </div>
    );
  }
};

