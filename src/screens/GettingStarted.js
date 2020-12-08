import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const GettingStarted = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>nCOV</Text>
      <Text style={styles.text}>
        Welcome to the ideation. An app designed to track down the virus and
        fight against it.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.push("Signin");
          }}
          style={styles.button1}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.push("Signup");
          }}
          style={styles.button2}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GettingStarted;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: "80%",
    backgroundColor: "#45B39D",
    justifyContent: "center",
  },
  heading: {
    marginLeft: "10%",
    color: "white",
    fontWeight: "bold",
    fontSize: 35,
    marginBottom: 20,
  },
  text: {
    marginHorizontal: "10%",
    color: "white",
    fontSize: 14,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  button1: {
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  button2: {
    borderTopLeftRadius: 40,
    backgroundColor: "#F4D03F",
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
});
