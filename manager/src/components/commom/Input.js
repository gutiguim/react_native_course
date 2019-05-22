import React from 'react';
import { Text, View, TextInput } from 'react-native';

// Call like this
// <Input
//   secureTextEntry
//   autoCorrect={false}
//   placeholder="password"
//   label="Password:"
//   value={this.state.password}
//   onChangeText={password => this.setState({ password })}
// />

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, autoCorrect }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={autoCorrect}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
};

export { Input };
