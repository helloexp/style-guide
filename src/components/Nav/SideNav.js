import React, {Component} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'

 class SideNav extends Component {

  render() {
    const { contents, type } = this.props
    console.log(this.props)
    let sortKeys = Object.keys(contents).sort();
    let links = sortKeys.map((slug, i) => {
      return (
        <NavItem key={i}>
            <Link className="text-cap nav-link" to={`/${type}/${slug}`}>{slug}</Link>
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