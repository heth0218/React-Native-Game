import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

const Card = props => {
    return (
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 2,
        padding: Dimensions.get('window').height > 600 ? 20 : 10,
        backgroundColor: 'white',
        borderRadius: 10
    }
})

export default Card
