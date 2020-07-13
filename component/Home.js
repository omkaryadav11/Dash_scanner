import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import { Colors } from "react-native-paper";
import Icon from "react-native-vector-icons/Entypo";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const data = [
      {
        id: 1,
        name: `Document 1`,
        date: "13 march",
      },
      {
        id: 2,
        name: `Document 2`,
        date: "13 march",
      },
      {
        id: 3,
        name: `Document 3`,
        date: "13 march",
      },
      // {
      //   id: 4,
      //   name: `Document 4`,
      //   date: "13 march",
      // },
      // {
      //   id: 5,
      //   name: `Document 5`,
      //   date: "13 march",
      // },
      // {
      //   id: 6,
      //   name: `Document 6`,
      //   date: "13 march",
      // },
      // {
      //   id: 7,
      //   name: `Document 7`,
      //   date: "13 march",
      // },
    ];

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Document Scanner</Text>

        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={styles.FlatList}>
                <View style={styles.preview}>
                  <Image
                    source={require("../assets/sample.jpg")}
                    style={{ width: "20%", height: "80%", margin: "4%" }}
                  />

                  <View style={{ marginBottom: "10%" }}>
                    <Text
                      style={{ color: "#fff", fontWeight: "400", fontSize: 19 }}
                    >
                      {item.name}
                    </Text>

                    <Text
                      style={{ color: "#fff", fontWeight: "400", fontSize: 12 }}
                    >
                      {item.date}
                    </Text>
                  </View>
                  <Icon
                    name="dots-three-vertical"
                    size={20}
                    color="#fff"
                    style={{ marginBottom: "10%", marginLeft: "25%" }}
                  />
                </View>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          style={{ marginTop: 150 }}
        />

        <View style={styles.navigation}>
          <Icon
            name="menu"
            size={35}
            color="#9BA0A6"
            style={{ marginRight: "35%" }}
          />

          <Icon
            name="dots-three-vertical"
            size={25}
            color="#9BA0A6"
            style={{ marginLeft: "35%" }}
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
    backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  navigation: {
    flexDirection: "row",
    backgroundColor: Colors.grey800,
    width: "100%",
    height: "6.3%",
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: "#E9EAEE",
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: "700",
    position: "absolute",
    top: 60,
  },
  preview: {
    height: 85,
    width: 300,
    backgroundColor: Colors.grey800,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  FlatList: {
    height: 110,
  },
});
