import React, {Component} from 'react';
import {StackScreen} from "./src/components/navigator";
import { NavigationContainer } from '@react-navigation/native';
export default class App extends Component{
  render(){
    return (
        <NavigationContainer>
          <StackScreen/>
        </NavigationContainer>
    );
  }
}
