import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from "./btn/CustomButton"
const Test4 = () => {
  return (
    <SafeAreaView style={styles.safeContainer} >
    <View style={styles.container}> 
      <View style={styles.box}>
        <Text style={styles.text}>
            Welcome
        </Text>
        <CustomButton title="press me" onPress={()=>alert("Pressed!")} />

      </View>
    </View>
    </SafeAreaView>
  )
}

export default Test4

const styles = StyleSheet.create({
    safeContainer:{
        flex:1,
        // backgroundColor:"blue",
        backgroundColor:"plum",
        paddingTop:Platform.OS==='android'?25:0
    },
    container:{
        flex:1,
        backgroundColor:"plum",
    },
    box:{
        padding:20
    },
    text:{
        ...Platform.select({
            ios:{
                color:"purple",
                fontSize:24,
                fontStyle:"italic"
            },
            android:{
                color:"blue",
                fontSize:30
            }
        }),
        fontWeight:"bold",
        textAlign:"center",
    },
})