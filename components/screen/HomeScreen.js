import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = ({navigation}) => {
    // const navigation=useNavigation()
  return (
    <View style={ScreenFront.container}>
      <Text style={ScreenFront.text}>HomeScreen</Text>
      <Button title='Go to About ' onPress={()=>navigation.navigate("About",{name:"sourav"})}/>
    </View>
  )
}

export default HomeScreen

export const ScreenFront = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"beige",
        alignItems:"center",
        justifyContent:"center",
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
    }
})