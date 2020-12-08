import React, {useState} from "react";
import { StyleSheet, Text, View, CheckBox } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SymptomChecker2 = ({navigation}) => {
    const [isSelected1, setSelection1] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);
    const [isSelected5, setSelection5] = useState(false);
    return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Have you ever had any of the following:</Text>
      </View>
      <View style = {styles.boxContainer}>
        <Text style={styles.checkText}>Diabetes</Text>
        <CheckBox
          value={isSelected1}
          onValueChange={setSelection1}
        />
      </View>
      <View style = {styles.boxContainer}>
        <Text style={styles.checkText}>Hyperstension</Text>
        <CheckBox
          value={isSelected2}
          onValueChange={setSelection2}
        />
      </View>
      <View style = {styles.boxContainer}>
        <Text style={styles.checkText}>Lung Disease</Text>
        <CheckBox
          value={isSelected3}
          onValueChange={setSelection3}
        />
      </View>
      <View style = {styles.boxContainer}>
        <Text style={styles.checkText}>Heart Disease</Text>
        <CheckBox
          value={isSelected4}
          onValueChange={setSelection4}
        />
      </View>
      <View style = {styles.boxContainer}>
        <Text style={styles.checkText}>None of the above</Text>
        <CheckBox
          value={isSelected5}
          onValueChange={setSelection5}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={() => {
          navigation.push('SymptomChecker3');
        }}
         style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SymptomChecker2;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    backgroundColor: "#0E6251",
    marginBottom: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  headerText:{
      padding: 20,
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold'
  },
  boxContainer: {
      flexDirection: 'row',
      marginHorizontal: 20,
      marginVertical: 10,
      justifyContent: 'space-between'
  },
  checkText:{
    width: '80%',
    flexDirection: 'row',
      fontSize: 16,
      flexWrap: 'wrap'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  button: {
    borderTopLeftRadius: 40,
    backgroundColor: "#0E6251",
    paddingVertical: 15,
    paddingHorizontal: "18%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});
