import { Button,StyleSheet, View,Modal,Text,StatusBar,ActivityIndicator } from "react-native";
import Test1 from "./components/Test1";
import CustomButton from"./components/btn/CustomButton"
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";
import Box from "./components/Box.js";
import FlexBox from "./components/FlexBox.js";
import Login from "./components/Login.js";
import Test6 from "./components/Test6.js";
import Test4 from "./components/Test4.js";
export default function App(){

  return(
  <>
    {/* <Box/> */}
{/* <Test3/> */}
{/* <Test1 /> */}
{/* <Test2/> */}
{/* <FlexBox stylepass={{backgroundColor:"#8e9b00",}}>Box1</FlexBox> */}
{/* <Test6/> */}
{/* <Login/> */}
<Test4/>
    </>
  )
}
const styles=StyleSheet.create({
  container:{
    borderWidth:6,
    // alignItems:"flex-end",
    // flexWrap:"wrap-reverse",
    // flexWrap:"wrap",
    // flexDirection:"row",
    
    // alignContent:"center",
    borderColor:"lime",
    marginTop:64,
    flex:1,
    marginBottom:50,
    // height:
    // height:300
    
    // justifyContent:"center",
    // alignItems:"baseline",
    // flexDirection:"column"
  }
})