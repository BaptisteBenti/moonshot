import React  from 'react';
import Clock  from '../Clock';
import BipBip from '../BipBip';
import moment from 'moment';

export default class SceneAlarm extends React.Component {
  constructor(props) {
    super(props);
    this.next = 'SceneWakeUp';
    this.handleClickStop = this.handleClickStop.bind(this);
    this.handleClickSnooze = this.handleClickSnooze.bind(this);
    this.handleClockCallback = this.handleClockCallback.bind(this);

    // the moment lib (used by the Clock comp) needs a full calendar date to works
    // it is not used in the plot
    const arbitraryDate = "1991-07-01";
    this.start = this.props.start ? arbitraryDate + ' ' + this.props.start : arbitraryDate + ' 07:59:58';
    this.startTime = moment(this.start);

    this.endTime = moment(this.startTime).add(4, 'seconds');

    this.state = {
      stopSnooze: false
    };
  }
  handleClickStop() {
    // go to the next scene
    this.props.setAlarm(this.state.endTime);
    this.props.handleNextScene('SceneStopIsActive');
  }
  handleClickSnooze() {
    this.props.handleNextScene('SceneSnoozeIsActive');
  }
  handleClockCallback() {
    this.setState({ stopSnooze: true });
  }
  render () {
    return (
      <div>

        <Clock // Tic, Tac...
          start = {this.startTime}
          end   = {this.endTime}
          callback = {this.handleClockCallback}
        />


        {this.state.stopSnooze &&

          // as soon as the clock reaches the end time,
          // the callback function toggle this.state.stopSnooze
          //
          // so the Stop and snooze buttons appear
          // as well as the wild Bips

          <div>
            <BipBip />
            <BipBip />
            <BipBip />
            <BipBip />
            <BipBip />
            <BipBip />


          {/* this block should be broken into smaller parts */}
            <div className="clockCommand">
              <button className="clockButton stopButton"   onClick={this.handleClickStop}   > STOP  </button>
              <button className="clockButton snoozeButton" onClick={this.handleClickSnooze} > SNOOZE </button>
            </div>

          </div>

        }

       </div>
    );
  }
};
