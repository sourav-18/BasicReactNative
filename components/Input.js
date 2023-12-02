import { StatusBar, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function Input() {
    const [name,setName]=useState("")
    const [dark,setDark]=useState(false)
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={setName} 
      placeholder='ex:-jhon doe'
      secureTextEntry
    //    keyboardType='numeric'
    // autoCapitalize='none'
    autoCorrect={false}
       />
       <TextInput style={[styles.input,styles.multiline]} placeholder='message' multiline/>
      <Text style={styles.text}>My Name is: {name}</Text>
      <View >
        <Text>Dark Mode</Text>
        <Switch value={dark} onValueChange={()=>setDark(!dark)}
        trackColor={{false:"blue",true:"green"}}
        thumbColor={"yellow"}
         />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:StatusBar.currentHeight+10,
        marginHorizontal:20

    },
    input:{
        borderWidth:2,
        borderColor:"blue",
        height:50,
        borderRadius:10, 
        padding:10
    },
    text:{
        marginTop:10,
        fontSize:20
    },
    multiline:{
        height:100,
    },
})