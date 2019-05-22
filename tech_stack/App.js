import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header } from './src/components/commom';
import LibraryList from './src/components/LibraryList';

// Provider can have only a single child component
export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText='Tech Stack' />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}
