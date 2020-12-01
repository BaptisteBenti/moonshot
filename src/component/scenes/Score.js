import React from 'react';

export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.next = 'Title';
  }
  handleClick() {
    this.props.handleNextScene('Scene' + this.next + 'IsActive');
  }
  render () {
    return (
      <div>
        <h1>Oh! Wait</h1>
        <p>Thanks for playing my game.</p>
        <p>This is my very first. Also the first time I participate in a game jam.</p>
        <p>If you want to follow the evolution of the project, have a look at my website</p>
        <p></p>
        <p>{">>> benti.fr <<<"}</p>
        <p></p>
        <p>(I know, for now it's empty)</p>
        <p></p>
        <button onClick={this.handleClick}>RESTART (for real)</button>
      </div>
    );
  }
};

