import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './src/components/commom';
import LoginForm from './src/components/LoginForm';

// https://console.firebase.google.com/project/authentication-ba619/authentication/providers

export default class App extends React.Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAIZIb7JtP3r2PKOZ1-TL9JZJpRDq_u50Y',
      authDomain: 'authentication-ba619.firebaseapp.com',
      databaseURL: 'https://authentication-ba619.firebaseio.com',
      projectId: 'authentication-ba619',
      storageBucket: 'authentication-ba619.appspot.com',
      messagingSenderId: '981941911871'
    });

    // On user state change (login or logout) do something
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
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
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}
