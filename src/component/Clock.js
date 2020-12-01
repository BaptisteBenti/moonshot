import React from 'react';
import moment from 'moment';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.start  = this.props.start || moment('1991-07-01 06:50:00'); // the clock starts at this.start time
    this.end    = this.props.end   || moment('1991-07-01 06:50:05'); // when the clock reaches this limit, it calls this.props.callback()

    this.state = { time: this.start };
  }
  componentDidMount() {
    this.clockID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.clockID);
  }
  tick() {

    // move forward one second
    const newTime = this.state.time.add(1, 'seconds');
    this.setState({
      time: newTime
    });

    // when the clock reaches this limit, it calls this.props.callback()
    if (this.state.time.isSameOrAfter(this.end)) {
      this.props.callback();
    }
  }
  render() {

    const clock = this.state.time;

    return(
      <div className="clock" >
        <div className="innerClock" >
          <span>{clock.format('HH:mm')}</span>
          <span>:</span>
          <span>{clock.format('ss')}</span>
        </div>
      </div>
    );
  }
}

export default Clock;