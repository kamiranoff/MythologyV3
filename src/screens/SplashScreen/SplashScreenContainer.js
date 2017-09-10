import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Animated } from 'react-native';
import SplashScreen from './SplashScreen';
import { fetchAllGreeks, fetchBooks, fetchQuotes } from '../../redux/actions';
import { NavigationActions } from 'react-navigation';

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

  _navigateTo = (routeName) => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    });
    this.props.navigation.dispatch(actionToDispatch);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.figures.loading && !nextProps.books.loading && !nextProps.quotes.loading) {
      this._navigateTo('Home');
    }
  }

  spring = () => {
    this.springValue.setValue(0.8);
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1
      }
    ).start();
  }

  render() {
    return (
      <SplashScreen
        spring={this.spring}
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
