import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStyle } from '../store/actions/Content/contents';


class Style extends Component {


  componentDidMount(){
    this.fetchStyleData();
  }

  fetchStyleData() {
    const { getStyle } = this.props;
    return getStyle()
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }

  render = () => {
    const {
        Layout,
        history,
        style
    } = this.props;
    
    return (
      <Layout
        history={history}
        style={style}
        
      />
    );
  }
}

const mapStateToProps = state => ({
  style: state.style || {}
});

const mapDispatchToProps = {
  getStyle: getStyle
};

export default connect(mapStateToProps, mapDispatchToProps)(Style);