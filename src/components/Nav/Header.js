import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Input} from 'reactstrap';
import { Link } from 'react-router-dom'

  

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout = () =>{
    this.props.logout();
    this.props.history.push('/')
  }
  render() {
    console.log(this.props)
    return (
      <div >
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Uniqlo Style Guide</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
            <Link className="nav-link" to="/components">
              Components
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link"  to="/style">
              Style
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link"  to="/colors">
              Colors
            </Link>
          </NavItem>
          { this.props.user.admin ? 
          <NavItem>
            <Link className="nav-link" style={{color: "#000"}} to="#" onClick={this.logout}>
              Logout
            </Link>
          </NavItem>
            
          :
          <NavItem>
            <Link className="nav-link" style={{color: "#000"}}  to="/login">Login</Link>
           </NavItem>
          }
          <Input style={{ width: "250px"}} placeholder="Search"/>
          </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}