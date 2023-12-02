import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import User from './components/screen/User';
import Admin from './components/screen/Admin';
import Ionicons from "@expo/vector-icons/Ionicons"
import { StackNavigator } from './AppStack';
const Tab=createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
     <Tab.Navigator screenOptions={{
      tabBarLabelPosition:"below-icon",
      tabBarShowLabel:true,
      tabBarActiveTintColor:"purple"
     }}>
      <Tab.Screen name='User'
      
       component={User} options={{
        tabBarLabel:"My Profile",
        tabBarIcon:()=>(<Ionicons name="person" size={20}/>),tabBarBadge:3}}/>
      <Tab.Screen name='Admin' component={Admin}/>
      <Tab.Screen name='Navigate' component={StackNavigator} options={{headerShown:false}}/>
     </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})