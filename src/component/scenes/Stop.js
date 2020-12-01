import React from 'react';
import TextBox from '../TextBox';

export default class SceneStop extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleCB = this.handleCB.bind(this);
    this.next = 'SceneWakeUp';
  }
  handleClick() {
    this.props.handleNextScene(this.next + 'IsActive');
  }
  handleCB() {
    // do nothing here...
  }
  render () {

    const legacyTime = this.props.time ;
    const staticTime = '13:45:12';
    let currentTime = '';

    if (legacyTime < staticTime) {
      currentTime = staticTime;
    } else {
      currentTime = legacyTime;
    }


    const msg = `
      It's time to wa... WHAT?

      Is it already ${currentTime}??
      Damn, time's running so fast!
    `

    return (
      <div className={""}>
        <TextBox text={msg} velocity={80} callback={this.handleCB}/>
        <button onClick={this.handleClick}>continue</button>

      </div>
    );
  }
};

