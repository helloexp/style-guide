import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, editItem } from '../store/actions/Content/contents';


class Admin extends Component {
  


  render = () => {
    const {
      user,
      Layout,
      history,
      addContent,
      editContent
    } = this.props;
    
    return (
      <Layout
        user={user}
        history={history}
        onSubmitAdd={addContent}
        onSubmitEdit = {editContent}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user || {},
});

const mapDispatchToProps = {
  addContent: addItem,
  editContent: editItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);