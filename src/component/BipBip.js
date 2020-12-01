import React from 'react';
import getRandomInt from '../utils/getRandomInt';

class BipBip extends React.Component {
  constructor(props) {
    super(props);
    this.speed = this.props.speed ? this.props.speed : 200;
    this.state = {
      posX: 0,
      posy: 0
    };
  }
  componentDidMount() {
    this.bipID = setInterval(
      () => this.tick(),
      this.speed
    );
  }
  componentWillUnmount() {
    clearInterval(this.bipID);
  }
  tick() {
    const randX = getRandomInt(100);
    const randY = getRandomInt(100);

    this.setState({
      posX: randX,
      posY: randY
    });
  }
  render() {

    const position = {
      // this is proper React syntax for component's inline style
      left: this.state.posX + '%',
      top: this.state.posY  + '%'
    };

    return (
      <p style={position} className="bipBip">BIP</p>
    );
  }
}

export default BipBip;