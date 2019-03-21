import React from 'react';
import {Row, Col} from 'reactstrap';
import SideNav from '../Nav/SideNav';

const ContentTemplate = (props) =>{

        return(
            <Row style={{marginTop: "50px", height: "100vh"}}>
            <Col sm={9}>
                {props.children}
            </Col>
            <Col sm={3}>
              <SideNav contents={"test"} type={props.type}/>
            </Col>
          </Row>
        )
}

export default ContentTemplate;