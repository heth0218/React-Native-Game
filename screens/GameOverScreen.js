import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView, SafeAreaView } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'
import NumberContainer from '../components/NumberContainer'
import BodyText from '../components/BodyText'
import MainButton from '../components/MainButton'

const GameOverScreen = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>

                <BodyText style={styles.text} >The Game Is Over In</BodyText>
                <Image
                    fadeDuration={1000}
                    style={styles.image}
                    resizeMode='cover'
                    source={{ uri: 'https://abrahamswallet.com/wp-content/uploads/2017/12/samuel-ferrara-117219-1180x770.jpg' }} />
                <Card style={styles.card}>
                    <NumberContainer style={styles.number}>{props.rounds}</NumberContainer>
                </Card>
                <View styles={styles.roundsText}>
                    <Text>Rounds</Text>
                </View>
                <View style={styles.button}>
                    <MainButton onPress={props.onRestart}>Start New Game </MainButton>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    text: {
        marginTop: Dimensions.get('window').height > 600 ? 10 : 5,
        fontSize: Dimensions.get('window').height > 600 ? 30 : 20,
        color: Colors.primary,
        paddingTop: 10
    },
    card: {
        flexDirection: 'row',
        width: Dimensions.get('window').width > 350 ? 80 : 70,
        height: Dimensions.get('window').height > 600 ? 120 : 90,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        fontSize: Dimensions.get('window').height > 600 ? 20 : 15
    },
    button: {
        padding: 20
    },
    roundsText: {
        marginVertical: 10,
        fontSize: 30
    },
    image: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        marginBottom: 10,
        borderWidth: 3,
        borderColor: 'black'
    }
})

export default GameOverScreen
