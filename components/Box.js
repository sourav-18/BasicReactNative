import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Box() {
  return (
    <View style={styles.container}>
    <View style={[styles.box,styles.blueBox]} >
      <Text>Box1</Text>
    </View>
    <View style={[styles.box,styles.grayBox,styles.androidShadow,styles.boxShadow]} >
      <Text>Box1</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"beige",
        padding:60,
    },
    box:{
        // flex:1,
        width:"70%",
        height:"15%",
        paddingHorizontal:10,
        paddingVertical:10,
        // borderWidth:5,
        // borderStyle:'dotted' ,
        // borderColor:"green",
        marginVertical:10,
        borderRadius:5
        
    },
    grayBox:{
        backgroundColor:"white",
        borderStyle:'solid',
        // borderColor:"gray",
        // borderWidth:5
    },
    blueBox:{
        backgroundColor:"blue"
    },
    boxShadow:{
      shadowColor:"#52006A",
      // shadowOffset:{
      //   width:10,
      //   height:10,
      // },
      // shadowOpacity:1,
      // shadowRadius:4,
    },
    androidShadow:{
      elevation:5,
    }

})