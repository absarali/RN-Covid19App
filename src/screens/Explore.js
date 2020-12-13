import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Circle } from "react-native-maps";
import * as Location from "expo-location";

const Explore = () => {
  const [location, setLocation] = useState({
    coords: {
      accuracy: 603,
      altitude: 0,
      altitudeAccuracy: 0,
      heading: 90,
      latitude: 37.4219091,
      longitude: -122.0840016,
      speed: 0,
    },
    mocked: false,
    timestamp: 1607860742876,
  });

  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        await Location.requestPermissionsAsync();
      } catch (e) {
        setErrorMsg(e);
      }
      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (e) {
        setErrorMsg(errorMsg + e);
      }
    })();
  }, []);
  return (
    <View>
      <MapView
        showsMyLocationButton={true}
        style={styles.map}
        initialRegion={{
          ...location.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          ...location.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Circle
          style={styles.mapShadow}
          center={{ ...location.coords }}
          radius={20}
          strokeColor="white"
          strokeWidth={4}
          fillColor="#007aff"
        />
      </MapView>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  map: {
    height: "100%",
  },
  mapShadow: {
    backgroundColor: "grey",
    borderRadius: 100,
    width: 200,
    height: 200,
  },
});
