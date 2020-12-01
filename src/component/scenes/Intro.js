import React from 'react';
import TextBox from '../TextBox';

export default class SceneIntro extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleCB = this.handleCB.bind(this);
    this.next = 'SceneAlarm';
    this.state = {
      nextButton: false
    };
  }
  handleClick() {
    this.props.handleNextScene(this.next + 'IsActive');
  }
  handleCB(_state) {
    this.setState({nextButton: _state});
  }
  render () {

    const msg = `
      Z z Z z Z z Z
      ...

      Oh no! I'm sure I was wearing pants, WTF?
      Mmm, it's ok, everyone is naked here

      ...
    `;

    console.log(this.state.nextButton)

    return (
      <div className="">
        <TextBox text={msg} callback={this.handleCB}/>
        {this.state.nextButton && <button onClick={this.handleClick}>continue</button>}

      </div>
    );
  }
};

