import React, { Component } from 'react';
import Header from './components/Nav/Header';
import SideNav from './components/Nav/SideNav';
import HeaderStyles from './components/Text'
import {Row, Col, Container} from 'reactstrap'

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

        <Container>
          <h1>Style Guide</h1>

          <Row style={{marginTop: "50px"}}>
            <Col sm={9}>
            <HeaderStyles/>
            </Col>
            <Col sm={3}>
              <SideNav />
            </Col>
          </Row>
        </Container>
   
      </div>
    );
  }
}

export default App;
