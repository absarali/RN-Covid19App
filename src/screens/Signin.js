import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const Signin = () => {
    return (
        <View style={styles.main}>
      <Text style={styles.header}>Sign in</Text>
      <View style = {styles.inputStyle}>
      <View style={styles.inputFields}>
        <Text style={styles.placeholder}>Email Address</Text>
        <TextInput style={styles.input} />
        <Text style={styles.placeholder}>Password</Text>
        <TextInput style={styles.input} />
      </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
}

export default Signin

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
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
      inputStyle:{
          marginTop: -50,
          backgroundColor: 'white',
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
        backgroundColor: '#45B39D',
      paddingVertical: 20,
      paddingHorizontal: 40
      },
      buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
      },
})
