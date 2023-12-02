import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { ScreenFront } from './HomeScreen'
import { useNavigation } from '@react-navigation/native'

export default function AboutScreen({route}) {
    const {name}=route.params;
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:name
        })
    })
    const navigation=useNavigation()
  return (
    <View style={ScreenFront.container}>
      <Text style={ScreenFront.text}>AboutScreen {name}</Text>
      <Button title='go to home' onPress={()=>navigation.navigate("Home")} />
    </View>
  )
}

const styles = StyleSheet.create({})