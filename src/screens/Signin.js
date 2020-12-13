import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const Signin = ({ navigation }) => {
  const username = 'test';
  const password = 'password';
  const [name, setName] = useState('test');
  const [key, setKey] = useState('password');

  return (
    <View style={styles.main}>
      <Text style={styles.header}>Sign in</Text>
      <View style={styles.inputStyle}>
        <View style={styles.inputFields}>
          <Text style={styles.placeholder}>Username</Text>
          <TextInput
            value={name}
            onChangeText={(newValue) => setName(newValue)}
            style={styles.input}
          />
          <Text style={styles.placeholder}>Password</Text>
          <TextInput
            value={key}
            onChangeText={(newValue) => setKey(newValue)}
            secureTextEntry={true}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
              navigation.push("Signup");
          }}
        >
          <Text style={styles.alternative}>Not a member? Signup here</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (username==name && password==key) {
            navigation.push("Home");
            }
            else {
              Alert.alert(
                "Error",
                "Invalid Username or Password",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") },
                ],
                { cancelable: false }
              );
            }
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    paddingTop: 80,
    paddingBottom: 80,
    backgroundColor: "#45B39D",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  inputStyle: {
    marginTop: -50,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
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
    backgroundColor: "#45B39D",
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  alternative: {
    color: "blue",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
