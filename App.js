import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "./src/screens/Explore";
import Home from "./src/screens/Home";
import StatisticsAnalysis from "./src/screens/StatisticsAnalysis";
import StatisticsDetails from "./src/screens/StatisticsDetails";
import GettingStarted from "./src/screens/GettingStarted";
import Signin from "./src/screens/Signin";
import Signup from "./src/screens/Signup";
import SymptomChecker1 from "./src/screens/SymptomChecker1";
import SymptomChecker2 from "./src/screens/SymptomChecker2";
import SymptomChecker3 from "./src/screens/SymptomChecker3";
import PrecautionsList1 from "./src/screens/PrecautionsList1";
import PrecautionsList2 from "./src/screens/PrecautionsList2";
import HighlightingRedZone from "./src/screens/HighlightingRedZone";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="StatisticsAnalysis" component={StatisticsAnalysis} />
    </Tab.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GettingStarted"
          component={GettingStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabsNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SymptomChecker1"
          component={SymptomChecker1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SymptomChecker2"
          component={SymptomChecker2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SymptomChecker3"
          component={SymptomChecker3}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="StatisticsDetails"
          component={StatisticsDetails}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PrecautionsList1"
          component={PrecautionsList1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PrecautionsList2"
          component={PrecautionsList2}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HighlightingRedZone"
          component={HighlightingRedZone}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
