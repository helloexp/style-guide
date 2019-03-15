import React, { Component } from 'react';
import Header from './components/Nav/Header';
import Template from './components/Container';
import { Container, Jumbotron} from 'reactstrap'

import './styles/desktop/desktop.scss';
import './styles/mobile/mobile.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      desktop: true
    }
  }


  render() {
    return (
      <div className={"App "  + this.state.desktop ? "uqdc-pc" : "uqdc-mb"} >
        <Header />
        <Container>
          <Jumbotron>
            <h1>Style Guide</h1>
          </Jumbotron>
          <Template />
        </Container>
      </div>
    );
  }
}

export default App;
