import React, {Component} from 'react';
import { Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

class SideNav extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggle: false,
      active: ''
    }
  }

  toggle(e, active){
    this.setState({
      toggle: !this.state.toggle,
      active: e
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="sidebar-nav">
        <Nav vertical>
          <NavItem>
            <Link className="nav-link" to="/dashboard/components" >Components</Link>
            
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/dashboard/style" >Style</Link>
      
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default  SideNav;