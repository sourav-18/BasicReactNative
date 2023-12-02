import { NavigationContainer } from '@react-navigation/native';
 import {createNativeStackNavigator} from "@react-navigation/native-stack"

import HomeScreen from './components/screen/HomeScreen';
import AboutScreen from './components/screen/AboutScreen';
import { Pressable, Text } from 'react-native';
export const StackNavigator=()=>{
  return(
    <Stack.Navigator initialRouteName='Home' screenOptions={{
      headerStyle:{backgroundColor:"#6a51ae"},
      headerTintColor:"#fff",
      headerTitleStyle:{fontWeight:"bold"},
      headerRight:()=>(<Pressable onPress={()=>alert("Menu button presssed !")}>
    
        <Text>Menu</Text>
      </Pressable>),
      contentStyle:{backgroundColor:"red"}
    }}>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="About" component={AboutScreen} initialParams={{name:"Gust"}} 
      // options={({route})=>({title:route.params.name})}
      />
    </Stack.Navigator>
  )
}
const Stack=createNativeStackNavigator();
export default function App()  {
  return (
    <NavigationContainer>
     <stackNavigator/>
    </NavigationContainer>
  );
}