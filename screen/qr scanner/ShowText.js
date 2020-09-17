import React, { Component } from "react";
import GenerateButton from "../../component/GenerateButton";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Clipboard,
  ToastAndroid,
} from "react-native";
export default class ShowText extends Component {
  render() {
    const { data } = this.props.route.params;
    // console.log(value);
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.text}>{data} </Text>
        </View>
        <View style={styles.copy}>
          <TouchableOpacity
            onPress={() => {
              Clipboard.setString(data);
              ToastAndroid.show("Text Copied", ToastAndroid.SHORT);
            }}
          >
            <GenerateButton Text="Copy" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
    color: "#fff",
    fontSize: 18,
    padding: 10,
    textAlign: "center",
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
