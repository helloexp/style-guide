import React, { Component } from 'react';
import Header from './components/Header'
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
        <Header />
      </div>
    );
  }
}

export default App;
