import React from 'react'
import { Button, View,Modal,Text,StatusBar } from "react-native";
import { useState } from "react";
const Test2 = () => {
    const [handleShow,setHandleShow]=useState(false)
  return (
    <View>
      <View style={{padding:60}} >
<StatusBar backgroundColor={"lightgreen"} barStyle={"dark-content"} />
    <Button title="Press me"  onPress={()=>setHandleShow(true)} disabled={false} color={"midnightblue"}/>
</View>
<Modal visible={handleShow} animationType="slide" onRequestClose={()=>setHandleShow(false)}
presentationStyle="pageSheet" //it only work in ios
>

  <View style={{flex:1,backgroundColor:"teal",padding:60 }}>
  <Button  title="close model"  onPress={()=>setHandleShow(false)} disabled={false} color={"midnightblue"} />
  </View>
</Modal>
    </View>
  )
}

export default Test2