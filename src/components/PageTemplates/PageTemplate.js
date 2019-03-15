import React from 'react';
import {Container} from 'reactstrap';
import Header from '../Nav/Header';



const PageTemplate = (props) => {
  return (
    <Container fluid>
      <Header />
      <Container>
        {props.children}
      </Container>
    </Container>
  )
}

export default PageTemplate;