import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

// 10.72

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD8m4DaHjYVVlA_facGk3aEXdCY0znGt80',
      authDomain: 'authentication-13e95.firebaseapp.com',
      databaseURL: 'https://authentication-13e95.firebaseio.com',
      projectId: 'authentication-13e95',
      storageBucket: 'authentication-13e95.appspot.com',
      messagingSenderId: '32190602270'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    console.log('renderContent!!!!!!!!!!!!!!!!!!!!!!!!!');
    switch (this.state.loggedIn) {
      case true:
      return (
        <CardSection>
        <Button onPress={() => firebase.auth().signOut()}>
        Log out
        </Button>
        </CardSection>
        );
      case false:
      return <LoginForm />;
      default:
      return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
      <Header headerText="Authentication" />
      hoge
      </View>
      );
  }
}

export default App;
