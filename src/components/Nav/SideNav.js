import React, {Component} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

 class SideNav extends Component {

  render() {
    const { contents, type } = this.props
    console.log(this.props)
    let links = Object.keys(contents).map(slug => {
      return (
        <NavItem>
            <NavLink href={`/${type}/${slug}`}>{slug}</NavLink>
        </NavItem>
      )
    })
    return (
      <div className="sidebar-nav">
        <Nav vertical>
          {links}
        </Nav>
      </div>
    );
  }
}

export default SideNav;