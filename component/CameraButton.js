import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors } from "react-native-paper";

export default class CameraButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var icon = this.props.add
      ? require("../assets/add.png")
      : require("../assets/camera.png");
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            console.log("Clicked");
          }}
        >
          <View style={styles.Button}>
            <Image
              source={icon}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 37.5,
    width: 75,
    height: 75,
    zIndex: 100,
    position: "absolute",
    bottom: "3%",
  },
  Button: {
    backgroundColor: Colors.grey800,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
