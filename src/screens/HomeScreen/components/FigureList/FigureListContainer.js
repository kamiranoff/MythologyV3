import React, { Component } from 'react';
import { connect } from 'react-redux';
import FigureList from './FigureList';

class FigureListContainer extends Component {

  render() {
    const { greeks } = this.props;
    return (
      <FigureList greeks={greeks} />
    );
  }
}

const mapStateToProps = ({ figures: { greeks } }) => ({
  greeks,
});

export default connect(mapStateToProps)(FigureListContainer);
