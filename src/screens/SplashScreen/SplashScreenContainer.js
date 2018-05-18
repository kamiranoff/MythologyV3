import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Animated } from 'react-native';
import SplashScreen from './SplashScreen';
import { fetchAllGreeks, fetchBooks, fetchQuotes } from '../../redux/actions';
import { NavigationActions } from 'react-navigation';

import Animations from '../../animations/Animations';

class SplashScreenContainer extends Component {
  static navigationOptions = {
    header: false,
    mode: 'modal',
  }

  constructor(props) {
    super(props);
    props.fetchAllGreeks();
    props.fetchQuotes();
    props.fetchBooks();
    this.springValue = new Animated.Value(1);
  }

  navigateTo = (routeName) => {
    this.props.navigation.navigate(routeName);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.figures.loading && !nextProps.books.loading && !nextProps.quotes.loading) {
      this.navigateTo('Tabs');
    }
  }

  render() {
    return (
      <SplashScreen
        spring={() => Animations.spring(this.springValue, 0.8, 1, 1)}
        springValue={this.springValue}
      />
    );
  }
}

const mapStateToProps = ({ figures, books, quotes }) => ({
  figures,
  books,
  quotes,
});

const mapDispatchToProps = {
  fetchBooks,
  fetchQuotes,
  fetchAllGreeks,
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreenContainer);
