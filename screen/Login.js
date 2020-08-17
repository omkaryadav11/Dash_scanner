import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import firebase from "../config/firebase";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  SafeAreaView,
} from "react-native";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isLoading: false,
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  userLogin = () => {
    if (this.state.email === "" && this.state.password === "") {
      Alert.alert("Enter details to signin!");
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          // console.log(res);
          console.log("User logged-in successfully!");
          this.setState({
            isLoading: false,
            email: "",
            password: "",
          });
          this.props.navigation.navigate("home");
        })
        .catch((error) => this.setState({ errorMessage: error.message }));
    }
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.view1}>
          <Image
            style={{
              width: "60%",
              height: "50%",
              marginTop: "30%",
            }}
            source={require("../assets/logo.png")}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: "25%",
              justifyContent: "space-between",
              width: "80%",
            }}
          >
            <TouchableOpacity>
              <Text
                style={{ color: "yellow", fontWeight: "700", fontSize: 20 }}
              >
                LOGIN
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Signup");
              }}
            >
              <Text
                style={{ color: "yellow", fontWeight: "700", fontSize: 20 }}
              >
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.view2}>
          <TextInput
            placeholder="Username"
            style={[styles.username, { marginBottom: 30 }]}
            onChangeText={(val) => this.updateInputVal(val, "email")}
            value={this.state.email}
          />
          <TextInput
            placeholder="Password"
            style={[styles.username, { marginBottom: 30 }]}
            onChangeText={(val) => this.updateInputVal(val, "password")}
            value={this.state.password}
            maxLength={8}
            secureTextEntry
          />
          <Button
            title="Login in"
            color="black"
            onPress={() => this.userLogin()}
          />
        </View>

        <StatusBar style="light" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
  },
  view1: {
    flex: 3,
    backgroundColor: "#000000",
    alignItems: "center",
  },
  view2: {
    flex: 2,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  username: {
    width: "80%",
    borderWidth: 1,
    height: 45,
    borderRadius: 23,
    padding: 5,
    textAlign: "center",
  },
  preloader: {
    alignSelf: "center",
  },
});
