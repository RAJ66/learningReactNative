/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View, Text } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome React Native </Text>
      <View style={styles.box} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: "#F00"
  }
});

export default App;
