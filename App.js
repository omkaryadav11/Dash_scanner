import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screen/Home";
import Login from "./screen/Login";
import Signup from "./screen/Signup";
import DocumentConverter from "./screen/DocumentConverter";
export default class App extends React.Component {
  render() {
    const stack = createStackNavigator();
    return (
      <NavigationContainer>
        <stack.Navigator headerMode="none">
          <stack.Screen name="Login" component={Login}/>
          <stack.Screen name="Signup" component={Signup}/>
          <stack.Screen name="home" component={Home} />
          <stack.Screen
            name="DocumentConverter"
            component={DocumentConverter}
          />
        </stack.Navigator>
      </NavigationContainer>
    );
  }
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
