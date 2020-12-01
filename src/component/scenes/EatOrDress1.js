import React from 'react';

export default class SceneEatOrDress1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.next = 'SceneEatOrDress2';
  }
  handleClick() {
    this.props.handleNextScene(this.next + 'IsActive');
  }
  render () {
    return (
      <div>
        <h1>Scene EatOrDress1</h1>
        <p>Not Implemented Yet... 🙁</p>
        <button onClick={this.handleClick}>NEXT SCENE</button>
      </div>
    );
  }
};

