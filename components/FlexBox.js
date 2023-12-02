import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexBox = ({children,stylepass}) => {
  return (
    <View style={[styles.box,stylepass]}>
      <Text style={[styles.text]}>{children}</Text>
    </View>
  )
}

export default FlexBox

const styles = StyleSheet.create({
    box:{
        // backgroundColor:"red",
        padding:20,
        // width:"25%",
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center",
        color:"black"
    }
})