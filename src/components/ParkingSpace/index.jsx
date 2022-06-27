import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

const BusyParking = () => {
  return (
    <View style={[styles.container, styles.busy]}>
      <Image source={require("../../../assets/car.png")} />
    </View>
  );
};

const FreeParking = () => {
  return <View style={[styles.container, styles.free]}></View>;
};

const ParkingSpace = ({ busy }) => {
  if (busy) {
    return <BusyParking />;
  }
  return <FreeParking />;
};

export default ParkingSpace;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: Dimensions.get("window").width / 2 - 40,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  busy: {
    backgroundColor: "#EB5353",
  },
  free: {
    backgroundColor: "#5FD068",
  },
  image: {
    resizeMode: "center",
  },
});
