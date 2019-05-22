import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBl6TIyBuAE8Z-CLYc7UNrzDHMDEz87o08',
      authDomain: 'manager-9d97a.firebaseapp.com',
      databaseURL: 'https://manager-9d97a.firebaseio.com',
      projectId: 'manager-9d97a',
      storageBucket: 'manager-9d97a.appspot.com',
      messagingSenderId: '648128401564',
      appId: '1:648128401564:web:b04871f4e943f3e2'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}
