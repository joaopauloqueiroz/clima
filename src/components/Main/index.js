import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from './styles';
import {general} from '../../styles/';

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Content aplication </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...general,
});
