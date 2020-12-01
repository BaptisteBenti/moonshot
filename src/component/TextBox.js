import React from 'react';
import NewLineText from '../utils/NewLineText';

// how to manage the breaks while displaying the text?
// how to manage breaks and CONTINUE >

class TextBox extends React.Component {
  constructor(props){

    super(props);

    this.text           = this.sanitizeText(this.props.text);
    this.velocity       = this.props.velocity   || 100  ;

    //                    this.props.start  (default: true)
    //                    this.props.end    (default: false)
    this.startAfter     = this.props.startAfter || 0    ;
    this.endAfter       = this.props.endAfter   || 100  ;

    this.state = {
      index: 0,
      output: ''
    };

  }
  componentDidMount() {

    // listen this.props.start (bool) to know when to start
    this.TextBoxID = setInterval(
      () => {
        if (!this.props.start) return null;
        clearInterval(this.TextBoxID);

        // then, we really start the logic after startAfter
        this.TimeoutID = setTimeout(
          () => this.startLogic()
          , this.startAfter
        );
      }
      , 100
    );
  }
  startLogic() {
    clearTimeout(this.TimeoutID);
    this.TextBoxID = setInterval(
      () => this.typewriter()
      , this.velocity
    );
  }
  componentWillUnmount() {
    clearInterval(this.TextBoxID);
  }
  sanitizeText(text) {
    if (!text) return '';
    if (Array.isArray(text)) {
      return text.join('\n');
    }
    return text;
  }
  typewriter() {
    let _output = this.state.output.concat('', this.text[this.state.index]);
    this.setState({output: _output});

    let limit = this.text.length;
    if (this.state.index < (limit - 1)) {
      this.setState({index: this.state.index + 1});
    } else { this.endOfLife() }

  }
  endOfLife() {
    // the message has been displayed, stop listening
    clearInterval(this.TextBoxID);

    // check if the msg should be hidden
    if (!this.props.end) return this.handleEnd();
        // then, we really end the logic after endAfter
        this.TimeoutID = setTimeout(
          () => this.handleEnd()
          , this.endAfter
        );
  }
  handleEnd() {
    this.props.callback(true);
  }
  render() {
    return (
      <p className={this.props.className || ''}>
        <NewLineText text= {this.state.output} />
      </p>
    );
  }
}

TextBox.defaultProps = {
  start: true,
  end  : false
};

export default TextBox;
