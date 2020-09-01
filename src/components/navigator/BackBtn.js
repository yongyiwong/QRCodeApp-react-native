import React, { Component } from 'react';

import {
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class BackBtn extends Component{
    render(){
        return(
            <TouchableOpacity
                delayPressIn = {0} 
                activeOpacity = {0.5}
                onPress={() => {
                    this.props.navigation.pop()
                }}
            >
                <LinearGradient colors={['#e3edff', '#aac8ff']} style = {{ marginLeft:10, height:30, width:70, borderRadius:5, alignItems:'center', justifyContent:'center'}}>
                    <Text style = {{textAlign:'center', color:'#1f497d', fontWeight:'bold'}}>戻る</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
}
//export default withNavigation(BackBtn);