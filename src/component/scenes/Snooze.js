import React from 'react';
import TextBox from '../TextBox';
import getRandomInt from '../../utils/getRandomInt';

export default class SceneSnooze extends React.Component {
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

    const min = getRandomInt(30);
    const sec = getRandomInt(60);

    this.props.handleNextScene(this.next + 'IsActive');
    this.props.setAlarm('00:' + min + ':' + sec);
  }
  handleCB(_state) {
    this.setState({nextButton: _state});
  }
  render () {

    const msg = [
      `
      Mmmmh...

      Not now, I was becoming famous for my idea of wearing a fig leaf
      We could use some kind of organic string to attach it
      ...

      `,
      `
      OK, I'll wake up in a moment...

      Just few minutes more, I still feel exhausted

      ...

      `,
      `
      Why should I wake up?

      I don't have any job, anything to do,
      nobody is waiting for me,
      besides, sleeping is my favorite activity

      Should I wear underpants at least?

      `,
      `
      Bip Bip Bip...

      Should I cut the red wire or the blue one?

      C'mon dude, I'm the one who gonna save the world!

      yippee-ki-yay...
      `
    ];

    const rand = getRandomInt(msg.length);
    const randMessage = msg[rand];

    console.log(this.state.nextButton)

    return (
      <div className="">
        <TextBox text={randMessage} callback={this.handleCB}/>
        <button onClick={this.handleClick}>continue</button>

      </div>
    );
  }
};

