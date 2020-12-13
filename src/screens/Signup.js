import React, {useState} from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('')
  const [key, setKey] = useState('');
  return (
    <View style={styles.main}>
      <Text style={styles.header}>Sign up</Text>
      <View style={styles.inputFields}>
        <Text style={styles.placeholder}>Username</Text>
        <TextInput 
        value={name}
        onChangeText={(newValue) => setName(newValue)}
        style={styles.input} />
        <Text style={styles.placeholder}>Phone Number</Text>
        <TextInput 
        value={number}
        onChangeText={(newValue) => setNumber(newValue)}
        style={styles.input} />
        <Text style={styles.placeholder}>Password</Text>
        <TextInput 
        value={key}
        onChangeText={(newValue) => setKey(newValue)}
        secureTextEntry={true}
        style={styles.input} />
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
          onPress={() => {
            navigation.push("Signin");
          }}
        >
          <Text style={styles.alternative}>Already a member? Signin here</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => {
          if (name.length>0 && key.length>0) {
            navigation.push("Home");
            }
            else {
              Alert.alert(
                "Error",
                "Please fill the required fields",
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
        style={styles.button}>
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
