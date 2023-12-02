import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenFront } from './HomeScreen'

const Admin = () => {
  return (
    <View style={ScreenFront.container}>
      <Text style={ScreenFront.text} >Admin</Text>
    </View>
  )
}

export default Admin

const styles = StyleSheet.create({})