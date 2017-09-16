import React, { Component } from 'react';
import { connect } from 'react-redux';
import FigureList from './FigureList';

class FigureListContainer extends Component {

  onPressItem = (item) => {
    console.log(item);
    this.props.navigation.navigate('FigureScreen', { item });
  }

  render() {
    const { greeks } = this.props;
    return (
      <FigureList greeks={greeks} onPressItem={this.onPressItem} />
    );
  }
}

const mapStateToProps = ({ figures: { greeks } }) => ({
  greeks,
});

export default connect(mapStateToProps)(FigureListContainer);
