import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../../store/actions/Auth/user';

class Auth extends Component {

  login = (data) => {
    const { login } = this.props;

    return login(data)
      .catch((err) => { this.setState({ errorMessage: err }); throw err; });
  }

  render = () => {
    const {
      user,
      Layout,
      history,
      logout
    } = this.props;
    
    return (
      <Layout
        user={user}
        history={history}
        login={this.login}
        logout={logout}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user || {},
});

const mapDispatchToProps = {
  login: login,
  logout: logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);