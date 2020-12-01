import React from 'react';

export default class SceneEatOrDress2 extends React.Component {
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
        <h1>You Win</h1>
        <p>😁</p>
        <p> </p>
        <p>You certainly haven't overcome the laziness inside you</p>
        <p>but you woke up for today.</p>
        <p></p>
        <button onClick={this.handleClick}>RESTART</button>
      </div>
    );
  }
};

