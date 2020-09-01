import React from "react";

import QRScanner from "../QRScanner";
import FirstScreen from "../FirstScreen";
import SecondScreen from "../SecondScreen";
import Test from "../Test";
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/stack';
import BackBtn from './BackBtn';
import NextBtn from './NextBtn';

const Stack = createStackNavigator();
export function StackScreen() {
 return (
    <Stack.Navigator
        headerTitle = 'Home'
        initialRouteName="FirstScreen"
        mode = 'card'
        headerMode = 'none'
        screenOptions={{
          headerTintColor :'#1f497d',
          headerTitleAlign:'center',
          headerStyle : {
            backgroundColor:'#cccccc',
            height: 40, // Specify the height of your custom header
          }
        }}
        // transparentCard = 'true'
        // cardStyle =  {{ opacity: 1 }}
    >
        <Stack.Screen
          name="FirstScreen" 
          component={FirstScreen} 
          initialParams={{itemId:1}}
        />
        <Stack.Screen
          name="SecondScreen" 
          component={SecondScreen} 
          initialParams={{itemId:2}}
        />        
        <Stack.Screen 
          name="QRScanner" 
          component={QRScanner} 
          initialParams={{itemId:10}}
          // options={{
          //   headerLeft: ({ navigation }) => (
          //     <BackBtn
          //       onPress={() => navigation.goBack()}
          //     />
          //   ),
          //   headerTransparent: true,
          // }}        
        />
        <Stack.Screen
          name="Test"
          component={Test}
          initialParams={{itemId:3}}
          // options={{
          //   headerLeft: ({ navigation }) => (
          //     <BackBtn
          //       onPress={() => navigation.goBack()}
          //     />
          //   ),
          //   headerRight: ( props ) => (
          //     <NextBtn
          //       {...props}
          //     />
          //   ),
          //   headerTransparent: true,
          // }}        
        />
    </Stack.Navigator>
  );
}