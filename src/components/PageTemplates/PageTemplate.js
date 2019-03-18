import React from 'react';
import {Container} from 'reactstrap';
import Header from '../Nav/Header';
import Footer from '../PageTemplates/Footer';
import AuthContainer from '../../Containers/Auth/Auth'




const PageTemplate = (props) => {
  return (
    <div >
      <AuthContainer Layout={Header}/>
      <Container style={{ marginTop:"40px", marginBottom: "50px",minHeight: "calc(100vh - 187px)"}}>
        {props.children}
      </Container>
      <Footer />
    </div>
  )
}

export default PageTemplate;