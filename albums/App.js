// Import a library to help create a component
import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// style={{ flex: 1 }} -> Please expand this component to fill the entire content on the device

// Create a component
export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

// Render it to the device
