import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

import ParkingSpace from "../../components/ParkingSpace";

export default Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>controle de estacionamento</Text>
      </View>
      <View style={styles.content}>
        <ParkingSpace busy />
        <ParkingSpace />
        <ParkingSpace />
        <ParkingSpace busy />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F2ED",
  },
  content: {
    flex: 1,
    padding: 20,
    flexWrap: "wrap",
  },
  header: {
    height: "15%",
    justifyContent: "center",
    backgroundColor: "#7F8487",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    color: "#ffff",
  },
});
