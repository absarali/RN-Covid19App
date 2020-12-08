import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const Signup = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.header}>Sign up</Text>
      <View style={styles.inputFields}>
        <Text style={styles.placeholder}>Full Name</Text>
        <TextInput style={styles.input} />
        <Text style={styles.placeholder}>Phone Number</Text>
        <TextInput style={styles.input} />
        <Text style={styles.placeholder}>Email Address</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    paddingTop: 80,
    paddingBottom: 60,
    backgroundColor: "#45B39D",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  inputFields: {
    marginHorizontal: "10%",
  },
  placeholder: {
    marginTop: 40,
    color: "grey",
  },
  input: {
    borderBottomWidth: 1,
    marginVertical: 5,
    borderBottomColor: "grey",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  button: {
    borderTopLeftRadius: 40,
    backgroundColor: '#45B39D',
  paddingVertical: 20,
  paddingHorizontal: 40
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
