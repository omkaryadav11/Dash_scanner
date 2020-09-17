import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import GenerateButton from "../../component/GenerateButton";
export default class GetText extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "" };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <TextInput
            placeholder="Enter text"
            style={styles.text}
            multiline
            value={this.state.data}
            onChangeText={(text) => {
              this.setState({ data: text });
              console.log(text);
            }}
          />
        </View>
        <View style={styles.copy}>
          <TouchableOpacity
            onPress={() => {
              let data = this.state.data;
              this.props.navigation.navigate("ShowQR", { data });
            }}
          >
            <GenerateButton Text="Generate" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    paddingVertical: 50,
  },
  text: {
    fontSize: 18,
    backgroundColor: "#37383C",
    padding: 10,
    textAlign: "center",
    height: "100%",
    width: "100%",
    borderRadius: 50,
  },
  container2: {
    flex: 30,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#707070",
    // height: "80%",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#37383C",
    // padding: 10,
  },
  copy: {
    // backgroundColor: "red",
    flex: 1,
    // marginTop: 40,
    paddingVertical: 20,
  },
});
