import React from 'react'
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native'
import Colors from '../constants/colors'
import TitleText from './TitleText'

const Header = props => {
    return (
        <View style={{ ...styles.headerBase, ...Platform.select({ ios: styles.headerIOS, android: styles.headerAndroid }) }}>
            <TitleText style={styles.title}>{props.title}</TitleText>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: Dimensions.get('window').height > 600 ? 90 : 60,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerIOS: {
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    headerAndroid: {
        backgroundColor: Colors.primary,
        borderBottomColor: 'transparent',
        borderBottomWidth: 0
    },
    title: {
        color: Platform.OS === 'ios' ? Colors.primary : 'white'
    }
})

export default Header;
