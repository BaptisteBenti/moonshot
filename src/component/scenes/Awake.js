import React from 'react';

export default class SceneAwake extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.next = 'SceneEatOrDress1';
  }
  handleClick() {
    this.props.handleNextScene(this.next + 'IsActive');
  }
  render () {
    return (
      <div>
        <h1>Scene Awake</h1>
        <p>Not Implemented Yet... 🙁</p>
        <button onClick={this.handleClick}>NEXT SCENE</button>
      </div>
    );
  }
};

