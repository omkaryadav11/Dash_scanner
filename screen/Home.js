import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Colors } from "react-native-paper";
import Icon from "react-native-vector-icons/Entypo";
import CameraButton from "../component/CameraButton";
import Setting from "../component/Menu";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: null,
    };
  }
  render() {
    const data = [
      {
        id: 1,
        name: `Document 1`,
        date: "15/7/2020",
      },
      {
        id: 2,
        name: `Document 2`,
        date: "15/7/2020",
      },
      {
        id: 3,
        name: `Document 3`,
        date: "15/7/2020",
      },
      {
        id: 4,
        name: `Document 4`,
        date: "15/7/2020",
      },
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

        <CameraButton />

        <Modal
          visible={this.state.visible}
          transparent={true}
          animationType="slide"
        >
          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => this.setState({ visible: false })}
          >
            <TouchableWithoutFeedback>
              <View style={styles.Menu}>
                <Text style={styles.menuHead}>Menu</Text>
                <Text style={styles.option}>Document Scanner</Text>
                <Text style={styles.option}>QR Scanner</Text>
                <Text style={styles.option}>Document Convertor</Text>
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>

        <View style={styles.navigation}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ visible: true });
            }}
          >
            <Icon
              name="menu"
              size={35}
              color="#9BA0A6"
              style={{ marginRight: "35%" }}
            />
          </TouchableOpacity>
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
  TouchableOpacity: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  Menu: {
    width: "100%",
    height: "35%",
    backgroundColor: Colors.grey900,
    marginTop: "135%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuHead: {
    color: "#E9EAEE",
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: "700",
    marginBottom: 40,
  },
  option: {
    color: "#E9EAEE",
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "600",
    marginBottom: 25,
  },
});
