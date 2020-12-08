import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Switch, TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

const Home = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.main}>
      <View style={styles.CovidInfo}>
        <Text style={styles.headerText}>Covid-19</Text>
        <View style={styles.checkBox}>
          <Text style={styles.heading1}>I'm a COVID-19 positive</Text>
          <Switch
            trackColor={{ false: "#DCE8DE", true: "#9DDEFC" }}
            thumbColor={isEnabled ? "#00AEFF" : "white"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Text style={styles.heading2}>In Quarantine</Text>
        <Text style={styles.text}>11 days in Quarantine</Text>
        <Text style={styles.text}>3 days to go</Text>
        <Text style={styles.textInfo}>
          In case of emergency call for immediate help.
        </Text>
        <View style={styles.buttonsView}>
          <TouchableOpacity 
          onPress={() => {
            navigation.push('SymptomChecker1');
          }}
          style={styles.buttonConatiner}>
            <FontAwesome name="pencil" size={17} color="white" />
            <Text style={styles.button}>Take test</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonConatiner}>
            <MaterialIcons name="call" size={18} color="white" />
            <Text style={styles.button}>Call us</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.prevention}>Prevention</Text>
      <View style={styles.precautionsView}>
        <View style={styles.precaution}>
          <Image
            style={styles.image}
            source={require("../images/socialDistancing.png")}
          />
          <Text style={styles.precautionText}>Social Distancing</Text>
        </View>
        <View style={styles.precaution}>
          <Image
            style={styles.image}
            source={require("../images/washAndSanitize.jpg")}
          />
          <Text style={styles.precautionText}>Wash and Sanitize</Text>
        </View>
        <View style={styles.precaution}>
          <Image
            style={styles.image}
            source={require("../images/handshake.jpg")}
          />
          <Text style={styles.precautionText}>Avoid Handshake</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  CovidInfo: {
    backgroundColor: "#0E6251",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    paddingHorizontal: "8%",
  },
  headerText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    marginTop: 35,
    marginBottom: 10,
  },
  checkBox: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: 5,
    paddingVertical: 8,
    borderRadius: 10,
  },
  heading1: {
    fontSize: 16,
    color: "black",
  },
  heading2: {
    marginVertical: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    color: "silver",
    fontSize: 14,
  },
  textInfo: {
    color: "silver",
    fontSize: 14,
    marginVertical: 8,
  },
  buttonsView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonConatiner: {
    flexDirection: "row",
    backgroundColor: "#1E5039",
    paddingVertical: 15,
    paddingHorizontal: 25,
    margin: 18,
    borderRadius: 25,
  },
  button: {
    marginLeft: 8,
    color: "#ECEEEF",
  },
  prevention: {
    marginVertical: 8,
    marginHorizontal: "8%",
    fontSize: 22,
    fontWeight: "900"
  },
  precautionsView: {
    marginHorizontal: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  precaution: {
      marginVertical: 10,
    flexDirection: "column",
  },
  image:{
      width: 100,
      height: 100
  },
  precautionText: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    textAlign: 'center',
    color: "#0B5345",
    fontSize: 11,
    marginVertical: 10,
  },
});
