import React from 'react';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeLang = this.handleChangeLang.bind(this);
  }
  handleChangeLang(e) {
    //this.props.handleChangeLang(e.target.value);
  }
  render() {

    return(
      <nav className="mainMenu">

        <input type="text" list="lang" onChange={this.handleChangeLang} />

        <datalist id="lang">
          {this.props.data.map(
            (item, key) => <option key={key} value={item} />
          )}
        </datalist>


        <button onClick={this.props.handleClickButton}>
          {this.props.buttonValue}
        </button>

      </nav>
    );
  }
}

export default MainMenu;