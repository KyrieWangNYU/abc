/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Index} from './Pages/Index.js';
import {
  NavigatorIOS,
  AppRegistry,
  StyleSheet,
} from 'react-native';

export default class Ctrip extends Component {
  render() {
    return (
      <NavigatorIOS 
        style = {styles.container} 
        initialRoute = {{
          title:'首页', component: Index,
          }}
          />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('Ctrip', () => Ctrip);
