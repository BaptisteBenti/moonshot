import React from 'react';

export default class SceneTitle extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.next = 'SceneIntro';
  }
  handleClick() {
    this.props.handleNextScene( this.next + 'IsActive');
  }
  render () {
    return (
      <div>
        <h1> MOONSHOT </h1>
        <button className="sceneTitle" onClick={this.handleClick}>START</button>
      </div>
    );
  }
};