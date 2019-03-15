import React from 'react';
import {Container} from 'reactstrap';
import Header from '../Nav/Header';
import Footer from '../PageTemplates/Footer';



const PageTemplate = (props) => {
  return (
    <Container fluid style={{}}>
      <Header />
      <Container style={{ marginTop:"40px", marginBottom: "50px",height: "calc(100vh - 187px)"}}>
        {props.children}
      </Container>
      <Footer />
    </Container>
  )
}

export default PageTemplate;