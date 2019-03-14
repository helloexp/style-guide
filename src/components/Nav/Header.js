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
          <Input style={{marginLeft: "auto", width: "40%"}}/>
        </Navbar>
      </div>
    );
  }
}