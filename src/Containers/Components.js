import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComponents } from '../store/actions/Content/contents';


class Components extends Component {


  componentDidMount(){
    this.fetchComponentData();
  }

  fetchComponentData() {
    const { getComponents } = this.props;
    return getComponents()
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }

  render = () => {
    const {
        Layout,
        history,
        components,
        match
    } = this.props;

    
    return (
      <Layout
        history={history}
        components={components}
        match={match}
        
      />
    );
  }
}

const mapStateToProps = state => ({
  components: state.contents.components || {}
});

const mapDispatchToProps = {
  getComponents: getComponents
};

export default connect(mapStateToProps, mapDispatchToProps)(Components);