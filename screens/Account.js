import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Account() {
  return (
    <View style = {styles.main}>
      <Text style = {styles.text}>Account</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : "blue",
    },

    text: {
        fontSize : 20,
        backgroundColor : "red",
        textAlign: "center",
        color : "white",
        padding : 10,
    },
})