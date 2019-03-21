import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContents } from '../store/actions/Content/contents';


class Contents extends Component {


  componentDidMount(){
    this.fetchContentData();
  }

  fetchContentData() {
    const { getContents } = this.props;
    return getContents()
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }

  render = () => {
    const {
        Layout,
        history,
        contents,
        match
    } = this.props;
    console.log(contents)
    
    return (
      <Layout
        history={history}
        contents={contents}
        match={match}
        
      />
    );
  }
}

const mapStateToProps = state => ({
  contents: state.contents || {}
});

const mapDispatchToProps = {
  getContents: getContents
};

export default connect(mapStateToProps, mapDispatchToProps)(Contents);