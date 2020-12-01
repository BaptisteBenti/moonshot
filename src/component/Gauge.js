import React from 'react';

class Gauge extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeydown      = this.handleKeydown.bind(this);
    this.handleDeletion     = this.handleDeletion.bind(this);
    this.decreaseDifficulty = this.decreaseDifficulty.bind(this);
    this.checkWin           = this.checkWin.bind(this);
    this.decreaseOpacity    = this.decreaseOpacity.bind(this);
    this.state = {
      opacityW: .004,
      opacityA: .004,
      opacityK: .004,
      opacityE: .004,
      opacityU: .004,
      opacityP: .004,
      score   : 0,
      ceil    : 3.1,
      height  : 0
    };
    this.gaugeRef = React.createRef();
    this.keysPlayable= ['w', 'a', 'k', 'e', 'u', 'p', 'W', 'A', 'K', 'E', 'U', 'P'];
    this.keysPressed = {};
    this.speed = 90;
    this.counter= 0;
    let {score, ceil, height, ...rest} = this.state;
    this.letters = rest;
  }
  componentDidMount() {
    this.GaugeID = [

      setInterval(
        () => this.handleLogic(),
        this.speed
      ),
      window.addEventListener("keydown" , this.handleKeydown),
      window.addEventListener("keyup"   , this.handleDeletion)
    ];
  }
  componentWillUnmount() {
    clearInterval(this.GaugeID[0]);
    window.removeEventListener("keydown" , this.handleKeydown);
    window.removeEventListener("keyup"   , this.handleDeletion);
  }
  handleLogic() {

    this.updateOffsetHeight();
    this.checkWin();
    this.updateScore();
    this.decreaseDifficulty();
    this.decreaseOpacity();

  }
  checkWin() {
    if (this.state. score >= this.state.ceil) {
      this.props.handleNextScene(true);
    }
  }
  updateScore() {
    let {score, ceil, height, ...letters} = this.state;
    let sum = Object.values(letters).reduce((a, b) => a + b, 0);
    this.setState({score: sum});
  }
  decreaseDifficulty() {
    this.counter = this.counter + 1 ;
    if (this.counter === 25) {
      if (this.state.ceil > 2.8) {
        this.setState({ceil: this.state.ceil - .1});
      }
      this.counter = 0;
    }
  }
  decreaseOpacity() {
    for (let opacity in this.letters) {
      if (this.state[opacity] > .5) {
        this.setState({[opacity]: .4});
      } else if (this.state[opacity] > 0) {
        this.setState({[opacity]: this.state[opacity] - .01});
      }
    }
  }
  handleKeydown(event) {
    this.keysPressed[event.key] = true;
    this.increaseOpacity();
  }
  increaseOpacity() {
    for (const value of this.keysPlayable.values()) {
      if (this.keysPressed[value]) {
        this.handleDeletion(value);
        let opacity = 'opacity' + value.toUpperCase();
        this.setState({[opacity]: this.state[opacity] + .03});
      }
    }
  }
  handleDeletion(e) {
    delete this.keysPressed[e.key];
    delete this.keysPressed[e];
  }
  updateOffsetHeight() {
    this.setState({height: this.gaugeRef.current.offsetHeight});
  }
  render() {

    // console.log('difficulty: ' + this.state.ceil);
    // console.log('score: ' + this.state.score);

    // the multiplier's value is arbitrary
    const multiplier = 32 + 500;

    // the value of 'fontSize' for the space between E and U is equal to the greater of that of its direct siblings
    const sizesToCompare = [this.state.opacityE, this.state.opacityU];
    sizesToCompare.sort((a, b) => b - a);
    const spaceFontSize = multiplier * sizesToCompare[0];

    // used to position the gauge at the center of the page in Y axis
    const marginValue = this.state.height / 2;
    const posY = {marginTop: `-${marginValue}px`};

    return(
      <div ref={this.gaugeRef} style={posY} className={this.props.className}>
        <span style={{ opacity: this.state.opacityW, fontSize: multiplier * this.state.opacityW }} >W</span>
        <span style={{ opacity: this.state.opacityA, fontSize: multiplier * this.state.opacityA }} >A</span>
        <span style={{ opacity: this.state.opacityK, fontSize: multiplier * this.state.opacityK }} >K</span>
        <span style={{ opacity: this.state.opacityE, fontSize: multiplier * this.state.opacityE }} >E</span>
        <span style={{                               fontSize: spaceFontSize                   }}>   </span>
        <span style={{ opacity: this.state.opacityU, fontSize: multiplier * this.state.opacityU }} >U</span>
        <span style={{ opacity: this.state.opacityP, fontSize: multiplier * this.state.opacityP }} >P</span>
      </div>
    );
  }
}

export default Gauge;

/* useful documentation:
*  https://www.gavsblog.com/blog/detect-single-and-multiple-keypress-events-javascript
*  https://medium.com/@dovern42/handling-multiple-key-presses-at-once-in-vanilla-javascript-for-game-controllers-6dcacae931b7
*/
