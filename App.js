import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Home from "./screen/Home";
import Setting from "./component/Menu";
export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      {/* <Setting /> */}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  navigation: {
    backgroundColor: "#37383C",
    width: "100%",
    height: "7%",
    position: "absolute",
    bottom: 0,
  },
});
