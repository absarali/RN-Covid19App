import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const StatisticsDetails = () => {
    return (
        <View style = {styles.main}>
            <Text style = {styles.header}>Statistics</Text>
            <View style = {styles.cardView}>
                <View style = {styles.cardContainer}>
                    <Text style = {styles.textHeading}>Total Case</Text>
                    <Text style = {styles.textInfo}>250</Text>
                </View>
                <View style = {styles.cardContainer}>
                    <Text style = {styles.textHeading}>Recovered Rate</Text>
                    <Text style = {styles.textInfo}>23.65%</Text>
                </View>
                <View style = {styles.cardContainer}>
                    <Text style = {styles.textHeading}>Fatality Rate</Text>
                    <Text style = {styles.textInfo}>250</Text>
                </View>
                <View style = {styles.cardContainer}>
                    <Text style = {styles.textHeading}>Active</Text>
                    <Text style = {styles.textInfo}>23.65%</Text>
                </View>
                <View style = {styles.cardContainer}>
                    <Text style = {styles.textHeading}>Last 24h</Text>
                    <Text style = {styles.textInfo}>+32</Text>
                </View>
                <View style = {styles.cardContainer}>
                    <Text style = {styles.textHeading}>Total Days</Text>
                    <Text style = {styles.textInfo}>82</Text>
                </View>
                <View style = {styles.cardContainer}>
                    <Text style = {styles.textHeading}>Death</Text>
                    <Text style = {styles.textInfo}>56</Text>
                </View>
                <View style = {styles.cardContainer}>
                    <Text style = {styles.textHeading}>Recoveries</Text>
                    <Text style = {styles.textInfo}>207</Text>
                </View>
                <View style = {styles.cardContainer}>
                    <Text style = {styles.textHeading}>Cases Per Million</Text>
                    <Text style = {styles.textInfo}>08</Text>
                </View>
                <View style = {styles.cardContainer}>
                    <Text style = {styles.textHeading}>Total Population</Text>
                    <Text style = {styles.textInfo}>2,744,241,345</Text>
                </View>
            </View>
        </View>
    )
}

export default StatisticsDetails

const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor: '#0E6251'
    },
    header:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: '10%',
        marginBottom: '3%',
        marginHorizontal: '14%'
    },
    cardView:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    cardContainer:{
        paddingTop: 10,
        alignItems: 'center',
        width: '45%',
        height: '20%',
        backgroundColor: 'white',
        margin: 8,
        borderRadius: 15
    },
    textHeading:{
        fontSize: 16,
        color: 'grey'
    },
    textInfo:{
        fontSize: 16,
        color: '#0E6251',
        fontWeight: 'bold'
    }
})
