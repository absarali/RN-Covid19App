import React from 'react'
import { StyleSheet, View } from 'react-native'
import MapView, { Circle, Polygon } from "react-native-maps";

const Explore = () => {
    return (
        <View>
            <MapView
        style={styles.map}
        initialRegion={{
          latitude: 24.8607, 
          longitude: 67.0011,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          latitude: 24.8607, 
          longitude: 67.0011,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Circle style = {styles.mapShadow}
          center={{latitude: 24.8607, longitude: 67.0011}}
          radius={30}
          strokeColor="white"
          strokeWidth= {2}
          fillColor="#007aff"
        />
      </MapView>
        </View>
    )
}

export default Explore

const styles = StyleSheet.create({
    map:{
        height: '100%'
    },
    mapShadow:{
        backgroundColor: 'grey',
        borderRadius: 100,
        width: 200,
        height: 200
    }
})
