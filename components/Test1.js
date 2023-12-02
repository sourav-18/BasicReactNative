import { View,Text,Image,ImageBackground,ScrollView, Pressable } from "react-native";
import React from 'react'
const logoImage=require("../assets/adaptive-icon.png")
const Test1 = () => {
  return (
    <View style={{backgroundColor:"#20232a",flex:1 ,padding:60}}>
    <ScrollView style={{backgroundColor:"black"}}>
    {/* <View style={{width:200,height:200,backgroundColor:"lightblue"}}></View> */}
    {/* <View style={{width:200,height:200,backgroundColor:"lightblue"}}></View> */}
    {/* <View style={{width:200,height:200,backgroundColor:"lightgreen",padding:60}}><Text>Hello World</Text></View>  */}
    <Pressable onPress={()=>console.log("press in image")} onPressOut={()=>console.log("onpressOut")} onPressIn={()=>{console.log("onpressIn")}} onLongPress={()=>console.log("long press >500ms")}>
    <Image source={logoImage} style={{width:300,height:300}}/>
    </Pressable>  
    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nisi autem voluptatibus. Consequatur, ipsam? In vero recusandae officiis, magnam deleniti laborum magni atque iure, aspernatur optio nam expedita laboriosam ipsum hic impedit non aperiam quas. Molestias magnam aspernatur facere est maiores debitis quas assumenda itaque eos eius pariatur iusto atque dolores consectetur quo incidunt ipsam odit temporibus, ut, saepe amet libero dolore voluptatum. Facere voluptatem odit assumenda voluptates, minus hic quas aspernatur dolor tenetur incidunt nesciunt facilis omnis, molestiae excepturi blanditiis veritatis debitis dolorum nostrum cumque cupiditate saepe dignissimos quis natus similique. Deleniti corrupti molestiae distinctio temporibus sint saepe nostrum Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, quaerat velit sed reprehenderit voluptas dignissimos sapiente, unde ad non, odit dolor inventore? Est debitis esse magnam rerum tempore earum deleniti!</Text>
    <Image source={logoImage} style={{width:300,height:300}}/>
    {/* <Image source={{uri:"https://t4.ftcdn.net/jpg/05/60/61/87/240_F_560618763_9oiYMrdHTNg55vR7VEXBb1w9F98kZMQp.jpg"}} style={{width:300,height:300,margin:40,borderRadius:50}}/> */}
    {/* <ImageBackground source={logoImage} style={{flex:1}}><Text>Image backgroundColor</Text></ImageBackground> */}
    {/* </ScrollView> */}
    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta necessitatibus harum tenetur dolores totam voluptatibus quisquam unde, numquam itaque voluptates doloribus, nisi rem consequatur, vel dolorum sunt officiis modi facere.</Text>
    </ScrollView>
  </View>
  )
}

export default Test1

