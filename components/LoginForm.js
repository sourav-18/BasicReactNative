import { SafeAreaView, StyleSheet, Text, TextInput, View,StatusBar, Button, Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'

const LoginForm = () => {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}
   
    >
    <View style={styles.card}>
        <Image style={styles.image} source={require("../assets/adaptive-icon.png")}/>
      <TextInput style={styles.input} placeholder='enter your name'/>
      <TextInput style={styles.input} placeholder='enter your password'/>
      <Button title='Log In'/>
    </View>
    </KeyboardAvoidingView>
  )
}

export default LoginForm

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"plum",
        paddingTop:StatusBar.currentHeight,

        // justifyContent:"flex-end"
    },
    card:{
        marginTop:170,
        // flex:1,
        backgroundColor:"beige",
        elevation:10,
        shadowColor:"white",
        width:"90%",
        alignSelf:"center",
        padding:20,
        borderRadius:10,
    },
    input:{
        borderWidth:2,
        borderColor:"gray",
        padding:10,
        margin:10,
        
    },
    image:{
        width:100,
        height:200,
        alignSelf:"center",
    }
})