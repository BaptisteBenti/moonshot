// https://fr.reactjs.org/docs/higher-order-components.html

import React from 'react';

export default function SceneWrapper(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleNextScene = this.handleNextScene.bind(this);
      this.setAlarm = this.setAlarm.bind(this);
    }
    handleNextScene(nextScene) {
      this.props.nextScene(nextScene);
    }
    setAlarm(time) {
      if (time) {
        this.props.setAlarm(time);
      }
    }
    render() {

      // avoid to pass className to WrappedComponent
      const {className, ...passThroughProps} = this.props;

      return (
        <div className = {this.props.className}>
          <WrappedComponent {...passThroughProps}
            handleNextScene = {this.handleNextScene}
            setAlarm = {this.setAlarm ? this.setAlarm : null}
          />
        </div>
      );
    }
  }
}