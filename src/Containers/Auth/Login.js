import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../../store/actions/Auth/user';

class Login extends Component {
  
  onFormSubmit = (data) => {
    const { onFormSubmit } = this.props;
    console.log("container", data)

    return onFormSubmit(data)
      .then(() => {
        console.log('success')
      })
      .catch((err) => { this.setState({ errorMessage: err }); throw err; });
  }

  render = () => {
    const {
      user,
      Layout,
      history
    } = this.props;
    
    return (
      <Layout
        user={user}
        history={history}
        onFormSubmit={this.onFormSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user || {},
});

const mapDispatchToProps = {
  onFormSubmit: login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);