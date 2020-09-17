import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import { Colors } from "react-native-paper";
import Icon from "react-native-vector-icons/Entypo";
import CameraButton from "../component/CameraButton";

export default class QR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: null,
      settings: null,
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <Text style={styles.header}>QR Scanner</Text>
        {/* Navigation bar */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Scan")}
        >
          <CameraButton />
        </TouchableOpacity>
        <View style={styles.navigation}>
          {/* Menu Button */}
          <TouchableOpacity
            onPress={() => {
              this.setState({ menu: true });
            }}
            style={{ marginRight: "37.5%" }}
          >
            <Icon name="menu" size={35} color="#9BA0A6" />
          </TouchableOpacity>

          {/* Settings Button */}
          <TouchableOpacity
            onPress={() => {
              this.setState({ settings: true });
            }}
            style={{ marginLeft: "37.5%" }}
          >
            <Icon name="dots-three-vertical" size={25} color="#9BA0A6" />
          </TouchableOpacity>
        </View>
        {/* Menu */}
        <View style={{ backgroundColor: "red" }}>
          <Modal
            visible={this.state.menu}
            transparent={true}
            animationType="slide"
            onRequestClose={() => this.setState({ menu: false })}
          >
            <TouchableOpacity
              style={styles.TouchableOpacity}
              onPress={() => this.setState({ menu: false })}
            >
              <TouchableWithoutFeedback>
                <View style={styles.Menu}>
                  <Text style={styles.menuHead}>Menu</Text>
                  <TouchableOpacity>
                    <Text
                      style={styles.option}
                      onPress={() => {
                        this.props.navigation.navigate("home");
                        this.setState({ menu: false });
                      }}
                    >
                      Document Scanner
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("QR");
                      this.setState({ menu: false });
                    }}
                  >
                    <Text style={styles.option}>Qr Scanner</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={styles.option}
                      onPress={() => {
                        this.props.navigation.navigate("DocumentConverter");
                        this.setState({ menu: false });
                      }}
                    >
                      Document Convertor
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            </TouchableOpacity>
          </Modal>
        </View>
        {/* Settings */}
        <Modal
          visible={this.state.settings}
          transparent={true}
          animationType="slide"
          onRequestClose={() => this.setState({ settings: false })}
        >
          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => this.setState({ settings: false })}
          >
            <TouchableWithoutFeedback>
              <View style={styles.Settings}>
                <Text style={styles.menuHead}>Settings</Text>
                <Text style={styles.option}>Theme</Text>
                <Text style={styles.option}>Storage</Text>
                <Text style={styles.option}>Feedbackr</Text>
                <Text style={[styles.option, { marginBottom: 50 }]}>About</Text>
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>
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
    position: "absolute",
    width: "100%",
    height: "35%",
    backgroundColor: Colors.grey900,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  Settings: {
    width: "100%",
    height: "45%",
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
    marginBottom: 30,
  },
  option: {
    color: "#E9EAEE",
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "600",
    marginBottom: 25,
  },
  button: {
    position: "absolute",
    bottom: "3%",
    zIndex: 10,
  },
});
