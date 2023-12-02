import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenFront } from './HomeScreen'

const User = () => {
    
  return (
    <View style={ScreenFront.container}>
      <Text style={ScreenFront.text} >User</Text>
    </View>
  )
}

export default User

const styles = StyleSheet.create({})