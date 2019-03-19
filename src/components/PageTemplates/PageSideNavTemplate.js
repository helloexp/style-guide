import React from 'react';
import {Container,Row, Col} from 'reactstrap';
import Header from '../Nav/Header';
import Footer from '../PageTemplates/Footer';
import AuthContainer from '../../Containers/Auth/Auth';
import AdminNav from '../Nav/AdminSideNav';

const PageSideNavTemplate = (props) => {
  return (
    <div className="page-template" >
        <AuthContainer history={props.children.props.history} Layout={Header}/>
        <div className="contents-container">
            <div className="admin-sidebar-container">
                    <AdminNav />
            </div>
            <div className="admin-container contents-container">
                <Container  style={{ minHeight: "calc(100vh - 180px)"}}>
                    {props.children}
                </Container>
            </div>
        </div>
      <Footer />
    </div>
  )
}

export default PageSideNavTemplate;