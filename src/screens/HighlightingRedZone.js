import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const HighlightingRedZone = () => {
  const chartConfig = {
    backgroundGradientFrom: "yellow",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "yellow",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };
  const screenWidth = Dimensions.get("window").width;
  const data = {
    labels: ["March1", "March2", "March3", "March4"],
    datasets: [
      {
        data: [31, 43, 55, 68, 80],
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Image style={styles.flag} source={require("../images/flagUSA.jpeg")} />
        <View style={styles.headerHead}>
          <Text style={styles.headerText}>Pennysylvania</Text>
          <Text style={styles.headerSubText}>Updated 12 mins ago</Text>
        </View>
      </View>
      <Text style={styles.heading}>New Case</Text>
      <LineChart
        style={styles.chart}
        data={data}
        width={screenWidth}
        height={180}
        chartConfig={chartConfig}
      />
      <View style={styles.statisticsDetails}>
        <View style={styles.statisticsTextView}>
          <Text style={styles.statisticsText}>Statistics</Text>
          <Text style={styles.statisticsSubText}>See all</Text>
        </View>
        <View style={styles.statisticsMain}>
          <View style={styles.statisticsView}>
            <Text style={styles.statisticsViewHeading}>Total Case</Text>
            <Text style={styles.statisticsViewText}>250</Text>
          </View>
          <View style={styles.statisticsView}>
            <Text style={styles.statisticsViewHeading}>Recovered Rate</Text>
            <Text style={styles.statisticsViewText}>23.65%</Text>
          </View>
          <View style={styles.statisticsView}>
            <Text style={styles.statisticsViewHeading}>Fatality Rate</Text>
            <Text style={styles.statisticsViewText}>250</Text>
          </View>
          <View style={styles.statisticsView}>
            <Text style={styles.statisticsViewHeading}>Active</Text>
            <Text style={styles.statisticsViewText}>23.65%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HighlightingRedZone;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    color: "white",
  },
  header: {
    marginVertical: 20,
    flexDirection: "row",
  },
  flag: {
      marginHorizontal: 10,
    width: 50,
    height: 50,
  },
  headerHead: {
    flexDirection: "column",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  headerSubText: {
    color: "silver",
    fontSize: 14,
  },
  heading: {
      marginHorizontal: '10%',
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  chart: {
    marginVertical: 20,
  },
  statisticsDetails: {
    backgroundColor: "#45B39D",
    flex: 1,
  },
  statisticsTextView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 8
  },
  statisticsText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  statisticsSubText: {
    color: "white",
    fontSize: 16,
  },
  statisticsMain: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  statisticsView: {
    margin: 14,
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 20,
    width: "42%",
    height: 80,
    padding: 10,
  },
  statisticsViewHeading: {
    color: "grey",
    fontSize: 18,
  },
  statisticsViewText: {
    color: "#45B39D",
    fontSize: 18,
    fontWeight: "bold",
  },
});
