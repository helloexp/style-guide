import React, {Component} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'

 class SideNav extends Component {

  render() {
    const { contents, type } = this.props
    console.log(this.props)
    let sortKeys = Object.keys(contents).sort();
    let links = sortKeys.map(slug => {
      return (
        <NavItem>
            <Link className="text-cap nav-link" href={`/${type}/${slug}`}>{slug}</Link>
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