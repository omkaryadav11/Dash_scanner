import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import GenerateButton from "../../component/GenerateButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export default function Scan({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigation.navigate("ShowText", { data });
    console.log(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.header}>QR Scanner</Text>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        // style={StyleSheet.absoluteFillObject}
        style={styles.scanner}
      />
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate("GetText")}
        >
          <GenerateButton Text="Generate" />
        </TouchableOpacity>

        {scanned && (
          <TouchableOpacity
            style={{ marginLeft: 40 }}
            onPress={() => setScanned(false)}
          >
            <Icon
              style={styles.restart}
              name="restart"
              size={40}
              color="#FFDE59"
            />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  scanner: {
    width: "100%",
    height: "70%",
    marginTop: 40,
  },
  screen: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    // opacity: "10%",
  },
  header: {
    color: "#E9EAEE",
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: "700",
    marginTop: 50,
  },
  buttons: {
    marginTop: "5%",
    flexDirection: "row",
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    width: "70%",
  },
});
