import React, { Component } from 'react';
import Text from './components/Text'
import './styles/desktop/desktop.scss';
import './styles/mobile/mobile.scss';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      desktop: true
    }
    // this.themeClickHandler() = this.themeClickHandler.bind(this)
  }
  // themeClickHandler = () => {
  //   this.setState({
  //     desktop: !this.state.desktop
  //   })
  // }

  render() {
    return (
      <div className={"App "  + this.state.desktop ? "uqdc-pc" : "uqdc-mb"} >
        <h1>Uniqlo Style Guide</h1>
        <Text />
      </div>
    );
  }
}

export default App;
