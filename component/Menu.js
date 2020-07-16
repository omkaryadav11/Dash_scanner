import React, { Component } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "react-native-paper";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.click,
    };
  }
  modelHandle = () => {
    this.setState({ visible: false });
  };
  render() {
    return (
      <View>
        <Modal
          visible={this.state.visible}
          transparent={true}
          animationType="slide"
        >
          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => this.setState({ visible: false })}
          >
            <View style={styles.Menu}></View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  TouchableOpacity: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  Menu: {
    width: "100%",
    height: "40%",
    backgroundColor: Colors.grey900,
    marginTop: "125%",
  },
});
