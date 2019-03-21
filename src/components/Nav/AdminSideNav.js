import React, {Component} from 'react';
import { Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

class SideNav extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggle: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <div className="sidebar-nav">
        <Nav vertical>
          <NavItem>
            <div  onClick={this.toggle} className="nav-link">Component</div>
            <Collapse isOpen={this.state.toggle}>
              <Link to="#" className="nav-link">Add</Link>
              <Link to="#" className="nav-link">Edit</Link>
            </Collapse>
          </NavItem>
          <NavItem>
            <div  onClick={this.toggle} className="nav-link">Style</div>
            <Collapse isOpen={this.state.toggle}>
              <Link to="#" className="nav-link">Add</Link>
              <Link to="#" className="nav-link">Edit</Link>
            </Collapse>
          </NavItem>
        
        </Nav>
        
      </div>
    );
  }
}

export default  SideNav;