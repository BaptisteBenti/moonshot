import React from 'react';
import Gauge from '../Gauge';
import TextBox from '../TextBox';

const message = [
  `I have to wake up...
  `,
  `C'mon, I focus all my energy to

    W A K E   U P

    ...

  `,
  `in fact, I really have nothing to do today.
   Like every day.
   I could sleep all day. Like ...
   Like a sad, grumpy bear that hibernates in winter`,
  `I could sleep forever and ever.
   sleeping... Forget everything
  `,
  `embrass the void,
   forget my loneliness, my melancholy
   I have no energy
  `,
  `to be or not to be
   nil, nada, zero, ziltch
  `,
  `Wait, What? Wake Up?
   Just an old thought
  `,
  `w a k e  u p
  `,
  `...


























  `
];

export default class SceneWakeUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleCallback = this.handleCallback.bind(this);
    this.handleLastMsg = this.handleLastMsg.bind(this);
    this.next = 'SceneAwake';
    this.state = {
      displayMsg1: true,
      displayMsg2: false,
      displayMsg3: false,
      displayMsg4: false,
      displayMsg5: false,
      displayMsg6: false,
      displayMsg7: false,
      displayMsg8: false,
      displayMsg9: false,
      index: 1
    };
  }
  handleClick() {
    this.props.handleNextScene(this.next + 'IsActive');
  }
  handleCallback() {

    const {index, ...msgs} = this.state

    // toggle OFF current msg
    for (let msg in msgs) {
      if (msgs[msg]) {
        this.setState({[msg]: !msgs[msg]})
      }
    }

    // toggle ON next msg
    this.setState({index: this.state.index +1});
    const nextMsg = 'displayMsg' + this.state.index;
    this.setState({[nextMsg]: !msgs[nextMsg]});

  }
  handleLastMsg() {
    this.props.handleNextScene('SceneEndIsActive');
  }
  render () {
    return (
      <div>
        {this.state.displayMsg1 &&
          <TextBox
            text={message[0]}
            end={true}
            endAfter={2000}
            velocity={80}
            className="opacity100"
            callback={this.handleCallback}
          />
        }
        {this.state.displayMsg2 &&
          <TextBox
            text={message[1]}
            end={true}
            endAfter={2000}
            velocity={80}
            className="opacity90"
            callback={this.handleCallback}
          />
        }
        {this.state.displayMsg3 &&
          <TextBox
            text={message[2]}
            end={true}
            endAfter={2000}
            velocity={80}
            className="opacity80"
            callback={this.handleCallback}
          />
        }
        {this.state.displayMsg4 &&
          <TextBox
            text={message[3]}
            end={true}
            endAfter={2000}
            velocity={80}
            className="opacity70"
            callback={this.handleCallback}
          />
        }
        {this.state.displayMsg5 &&
          <TextBox
            text={message[4]}
            end={true}
            endAfter={2000}
            velocity={80}
            className="opacity60"
            callback={this.handleCallback}
          />
        }
        {this.state.displayMsg6 &&
          <TextBox
            text={message[5]}
            end={true}
            endAfter={2000}
            velocity={80}
            className="opacity50"
            callback={this.handleCallback}
          />
        }
        {this.state.displayMsg7 &&
          <TextBox
            text={message[6]}
            end={true}
            endAfter={2000}
            velocity={80}
            className="opacity40"
            callback={this.handleCallback}
          />
        }
        {this.state.displayMsg8 &&
          <TextBox
            text={message[7]}
            end={true}
            endAfter={2000}
            velocity={80}
            className="opacity30"
            callback={this.handleCallback}
          />
        }
        {this.state.displayMsg9 &&
          <TextBox
            text={message[8]}
            velocity={80}
            className="opacity20"
            callback={this.handleLastMsg}
          />
        }


        <Gauge
          className="gauge"
          handleNextScene={this.handleClick}
        />
      </div>
    );
  }
};