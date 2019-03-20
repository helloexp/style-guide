import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, editItem, deleteItem } from '../store/actions/Content/contents';


class Admin extends Component {
  render = () => {
    const {
      user,
      Layout,
      history,
      addContent,
      editContent,
      deleteContent,
      match
    } = this.props;
    
    return (
      <Layout
        user={user}
        history={history}
        onSubmitAdd={addContent}
        onSubmitEdit = {editContent}
        delete = {deleteContent}
        match={match}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user || {},
});

const mapDispatchToProps = {
  addContent: addItem,
  editContent: editItem,
  deleteContent: deleteItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);