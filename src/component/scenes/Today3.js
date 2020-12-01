import React from 'react';

export default class SceneToday3 extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.next = 'End';
  }
  handleClick() {
    this.props.handleNextScene('Scene' + this.next + 'IsActive');
  }
  render () {
    return (
      <div>
        <h1>Scene Today3</h1>
        <p>Not Implemented Yet... 🙁</p>
        <button onClick={this.handleClick}>NEXT SCENE</button>
      </div>
    );
  }
};

