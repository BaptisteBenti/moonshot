/* useful documentation

- official react doc: https://fr.reactjs.org/
- styling comp in react: https://www.smashingmagazine.com/2020/05/styling-components-react/
- HOC in react: https://www.smashingmagazine.com/2020/06/higher-order-components-react/
- create-react-app: https://create-react-app.dev/docs/getting-started/
- how to localize a react app:
  - https://medium.com/@jishnu61/6-easy-steps-to-localize-your-react-application-internationalization-with-i18next-8de9cc3a66a1
  - https://react.i18next.com/latest/using-with-hooks
*/

import React, { Suspense } from 'react';
import './App.sass';

// Components
import * as Scene from './component/scenes/';
import SceneWrapper from './component/SceneWrapper';

class App extends React.Component {

  constructor(props) {
    super(props);

    // keep isFixed for all Scenes for this very first version of the game
    // add/remove borderDev to display/hide a border on all DOM element
    // it should be necessary to remove defaultTheme at the end
    this.sharedClasses = "isFixed defaultTheme";

    // only one scene must be active at a time
    this.state = {
      SceneTitleIsActive: true,
      SceneIntroIsActive: false,
      SceneAlarmIsActive: false,
      SceneStopIsActive: false,
      SceneSnoozeIsActive: false,
      SceneWakeUpIsActive: false,
      SceneAwakeIsActive: false,
      SceneEatOrDress1IsActive: false,
      SceneEatOrDress2IsActive: false,
      SceneEatOrDress3IsActive: false,
      SceneToDo1IsActive: false,
      SceneToDo2IsActive: false,
      SceneToday1IsActive: false,
      SceneToday2IsActive: false,
      SceneToday3IsActive: false,
      SceneEndIsActive: false,
      SceneScoreIsActive: false,
      alarmTime: "07:59:56"
    }
    this.handleSceneChange  = this.handleSceneChange.bind(this);
    this.appendAlarmTime = this.appendAlarmTime.bind(this);
  }

  handleSceneChange(nextScene) {

    const {alarmTime, ...scenes} = this.state;

    // toggle OFF the current scene
    for (let scene in scenes) {
      if (scenes[scene]) {
        this.setState({
          [scene]: !scenes[scene]
        });
      }
    }

    // toggle ON the next scene
    this.setState({
      [nextScene]: !scenes[nextScene]
    });

  }

  appendAlarmTime(time) {

    const prevTime = this.state.alarmTime;
    const addTime  = time;
    let   newTime  = '';

    let h = 0;
    let m = 0;
    let s = 0;

    let splitPrev = prevTime.split(':');
    let splitAdd  = addTime.split(':');

    h = parseInt(splitPrev[0]) + parseInt(splitAdd[0]);
    m = parseInt(splitPrev[1]) + parseInt(splitAdd[1]);

    h = Math.trunc(h + m/60);
    m = m%60;

    s = parseInt(splitPrev[2]) + parseInt(splitAdd[2]);

    m = Math.trunc(m + s/60);
    s = Math.trunc(s%60);

    if (h < 10) h = '0'+h;
    if (m < 10) m = '0'+m;
    if (s < 10) s = '0'+s;

    newTime = h + ':' + m + ':' + s;

    let hour   = splitPrev[0] + splitAdd[0];
    let minute = splitPrev[1] + splitAdd[1];
    hour = hour + minute/60;

    console.log('newTime' + newTime);

    this.setState({alarmTime: newTime});
  }

  render() {

    const SceneTitle        = SceneWrapper(Scene.Title);
    const SceneIntro        = SceneWrapper(Scene.Intro);
    const SceneAlarm        = SceneWrapper(Scene.Alarm);
    const SceneStop         = SceneWrapper(Scene.Stop);
    const SceneSnooze       = SceneWrapper(Scene.Snooze);
    const SceneWakeUp       = SceneWrapper(Scene.WakeUp);
    const SceneAwake        = SceneWrapper(Scene.Awake);
    const SceneEatOrDress1  = SceneWrapper(Scene.EatOrDress1);
    const SceneEatOrDress2  = SceneWrapper(Scene.EatOrDress2);
    const SceneEatOrDress3  = SceneWrapper(Scene.EatOrDress3);
    const SceneToDo1        = SceneWrapper(Scene.ToDo1);
    const SceneToDo2        = SceneWrapper(Scene.ToDo2);
    const SceneToday1       = SceneWrapper(Scene.Today1);
    const SceneToday2       = SceneWrapper(Scene.Today2);
    const SceneToday3       = SceneWrapper(Scene.Today3);
    const SceneEnd          = SceneWrapper(Scene.End);
    const SceneScore        = SceneWrapper(Scene.Score);

    console.log(this.state.alarmTime);

    return(

      <div>

        { this.state.SceneTitleIsActive       && <SceneTitle
          nextScene = {this.handleSceneChange}
          className = {"sceneTitle" + " " + this.sharedClasses}
        /> }
        { this.state.SceneIntroIsActive       && <SceneIntro
          nextScene = {this.handleSceneChange}
          className = {"sceneIntro" + " nightBG " + this.sharedClasses}
        /> }
        { this.state.SceneAlarmIsActive       && <SceneAlarm
          nextScene = {this.handleSceneChange}
          className = {"sceneAlarm" + " " + this.sharedClasses}
          start = {this.state.alarmTime}
        /> }
        { this.state.SceneStopIsActive       && <SceneStop
          nextScene = {this.handleSceneChange}
          className = {"sceneStop" + " nightBG " + this.sharedClasses}
          setAlarm  = {this.appendAlarmTime}
          time = {this.state.alarmTime}
        /> }
        { this.state.SceneSnoozeIsActive       && <SceneSnooze
          nextScene = {this.handleSceneChange}
          className = {"sceneSnooze" + " nightBG " + this.sharedClasses}
          setAlarm  = {this.appendAlarmTime}
        /> }
        { this.state.SceneWakeUpIsActive      && <SceneWakeUp
          nextScene = {this.handleSceneChange}
          className = {"sceneWakeUp" + " " + this.sharedClasses}
        /> }
        { this.state.SceneAwakeIsActive      && <SceneAwake
          nextScene = {this.handleSceneChange}
          className = {"sceneAwake" + " " + this.sharedClasses}
        /> }
        { this.state.SceneEatOrDress1IsActive && <SceneEatOrDress1
          nextScene = {this.handleSceneChange}
          className = {"SceneEatOrDress1" + " " + this.sharedClasses}
        /> }
        { this.state.SceneEatOrDress2IsActive && <SceneEatOrDress2
          nextScene = {this.handleSceneChange}
          className = {"SceneEatOrDress2" + " " + this.sharedClasses}
        /> }
        { this.state.SceneEatOrDress3IsActive && <SceneEatOrDress3
          nextScene = {this.handleSceneChange}
          className = {"SceneEatOrDress3" + " " + this.sharedClasses}
        /> }
        { this.state.SceneToDo1IsActive       && <SceneToDo1
          nextScene = {this.handleSceneChange}
          className = {"SceneToDo1" + " " + this.sharedClasses}
        /> }
        { this.state.SceneToDo2IsActive       && <SceneToDo2
          nextScene = {this.handleSceneChange}
          className = {"SceneToDo2" + " " + this.sharedClasses}
        /> }
        { this.state.SceneToday1IsActive      && <SceneToday1
          nextScene = {this.handleSceneChange}
          className = {"SceneToday1" + " " + this.sharedClasses}
        /> }
        { this.state.SceneToday2IsActive      && <SceneToday2
          nextScene = {this.handleSceneChange}
          className = {"SceneToday2" + " " + this.sharedClasses}
        /> }
        { this.state.SceneToday3IsActive      && <SceneToday3
          nextScene = {this.handleSceneChange}
          className = {"SceneToday3" + " " + this.sharedClasses}
        /> }
        { this.state.SceneEndIsActive         && <SceneEnd
          nextScene = {this.handleSceneChange}
          className = {"SceneEnd" + " " + this.sharedClasses}
        /> }
        { this.state.SceneScoreIsActive       && <SceneScore
          nextScene = {this.handleSceneChange}
          className = {"SceneScore" + " " + this.sharedClasses}

        /> }

      </div>

    );
  }
}

export default App;