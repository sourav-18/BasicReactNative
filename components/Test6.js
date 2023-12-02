import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

const Test6 = () => {
  // const [dimensions,setDimensions]=useState({
  //   window:Dimensions.get("window")
  // })
  // useEffect(()=>{
  //   const subscription=Dimensions.addEventListener("change",({window})=>{
  //     setDimensions({window});
  //   })
  //   console.log(subscription)
  //   return ()=>subscription?.remove();  
  // },[])
  // const {window}=dimensions;
  var windowWidth=useWindowDimensions().width;
  var windowHeight=useWindowDimensions().height;
  return (
    <View style={styles.container}>
    <View style={[styles.box, {width:windowWidth>500?"70%":"90%"},{height:windowHeight>600?'60%':"90%"}]}>
      <Text style={{fontSize:windowWidth>500?50:24}}>Wellcome!</Text>
    </View>
    </View>
  )
}

export default Test6
// const windowWidth=Dimensions.get("window").width;
// const windowHeight=Dimensions.get("window").height;
// console.log({windowHeight,windowWidth})
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"plum",
        alignItems:"center",
        justifyContent:"center",
    },
    box:{
        // width:windowWidth>500?"70%":"90%",
        // height:windowHeight>600?'60%':"90%",
        backgroundColor:"lightblue",
        alignItems:"center",
        justifyContent:"center"
    },
    // text:{
    //    fontSize:windowWidth>500?50:24, 
    // }
}) 