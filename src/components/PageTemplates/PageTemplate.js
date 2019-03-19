import React from 'react';
import {Container} from 'reactstrap';
import Header from '../Nav/Header';
import Footer from '../PageTemplates/Footer';
import AuthContainer from '../../Containers/Auth/Auth'




const PageTemplate = (props) => {
  return (
    <div className="page-template" >
      <AuthContainer history={props.children.props.history} Layout={Header}/>
      <div className="contents-container">
        <Container  style={{ minHeight: "calc(100vh - 187px)"}}>
          {props.children}
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default PageTemplate;