import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class GenerateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.button}>
        <Text style={styles.Text}> {this.props.Text} </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFDE59",
    height: 40,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  Text: {
    fontSize: 20,
    fontWeight: "700",
  },
});
