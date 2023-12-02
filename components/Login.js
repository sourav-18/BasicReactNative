import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function Login() {
    const [loginResponse,setLoginResponse]=useState("")
    const [loginValue,setLoginValue]=useState({aadharNumber:'',password:''})
    const handleSetLoginValue=(key,value)=>{
        setLoginValue({...loginValue, [key]: value});
    }
    const handleButtonPress=async()=>{
        console.log(loginValue)
        try{
            const data=await fetch("http://192.168.0.143:4000/voter/login",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                  },
                body:JSON.stringify(loginValue)
            })
             const response=await data.json();
             setLoginResponse(response);
             console.log(loginResponse)
         }catch(error){
             console.log("error from login frontend ",error)
         }
    }
  return (
    <>
    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <Text style={styles.headingText}>LogIn</Text>
     <TextInput style={styles.inputBox} placeholder='enter you AadharNumber' value={loginValue.aadharNumber} onChangeText={(val)=>{handleSetLoginValue("aadharNumber",val)}} />
     <TextInput style={styles.inputBox} placeholder='enter you password' value={loginValue.password} onChangeText={(val)=>{handleSetLoginValue("password",val)}} />
     <Button title='Login' onPress={handleButtonPress}/>
        </View>
     </View>
        <View>
            {loginResponse?
            <View>
                <Text>{loginResponse?.message}</Text>
                <Text>{loginResponse?.jwt_token}</Text>
            </View>
            :''}
        </View>
       
    </>
  )
}

const styles = StyleSheet.create({
    headingText:{
        color:"black",
        fontWeight:'400',
        fontSize:30,
        textAlign:"center",
        marginBottom:6
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:100
        
    },
    inputContainer: {
        // alignItems:"center",
        width: '80%',
        padding: 20,
        backgroundColor: '#eff5f7',
        borderRadius: 10,
        elevation: 4,
      },
    inputBox:{borderWidth:1,
    padding:10,
    borderRadius:3,
    width:"100%",
    color:"black",
    backgroundColor:'gray',
    marginBottom:10,
    
    
}
})