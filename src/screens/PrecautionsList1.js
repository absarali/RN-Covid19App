import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const PrecautionsList1 = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.header}>Quarantine Yourself for 14 days.</Text>
      <Text style={styles.text}>Your risk of infection is moderate. Please ensure to stay quarantined for 14 days after your travel.
      While you are feeling absolutely healthy, it can take upto 2 weeks for symptoms to show, even if you are infected.
      </Text>
      <Text style = {styles.text}>Your information will be uploaded to our database and you will be monitored.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
       onPress={() => {
        navigation.push('Home');
      }} 
         style={styles.button}>
          <Text style={styles.buttonText}>Finish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PrecautionsList1;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    paddingTop: 100,
    paddingBottom: 60,
    backgroundColor: "#F4D03F",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    borderBottomRightRadius: 45,
    borderBottomLeftRadius: 45,
    marginBottom: '10%',
  },
  text: {
      marginTop: 20,
      fontSize: 15,
      color: 'black',
    marginHorizontal: '10%'
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
    paddingVertical: 15,
    paddingHorizontal: 60,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
