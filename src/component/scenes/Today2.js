import React from 'react';

export default class SceneToday2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.next = 'Today3';
  }
  handleClick() {
    this.props.handleNextScene('Scene' + this.next + 'IsActive');
  }
  render () {
    return (
      <div>
        <h1>Scene Today2</h1>
        <p>Not Implemented Yet... 🙁</p>
        <button onClick={this.handleClick}>NEXT SCENE</button>
      </div>
    );
  }
};

