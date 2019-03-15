import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem ,
  Input} from 'reactstrap';

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
  render() {
    return (
      <div style={{marginBottom:"50px"}}>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Uniqlo Style Guide</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink>
              Components
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              Style
            </NavLink>
          </NavItem>
          <Input style={{ width: "250px"}} placeholder="Search"/>
          </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}