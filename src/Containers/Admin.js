import React, { Component } from 'react';
import { connect } from 'react-redux';


class Admin extends Component {
  


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
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user || {},
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);