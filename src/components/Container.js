import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import SideNav from './Nav/SideNav';

class Container extends Component {

    render(){
        return(
            <Row style={{marginTop: "50px", height: "100vh"}}>
            <Col sm={9}>
                Test
            </Col>
            <Col sm={3}>
              <SideNav />
            </Col>
          </Row>
        )
    }
}

export default Container;