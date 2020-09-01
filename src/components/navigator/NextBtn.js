import React, { Component } from 'react';

import {
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class NextBtn extends Component{
    render(){
//console.log( "ID---" + this.props.id );
        return(
            <TouchableOpacity 
                delayPressIn = {0}
                activeOpacity = {0.5}
                onPress={() => {
                    this.props.navigation.push('SecondScreen')
                }}
            >
                <LinearGradient colors={['#e3edff', '#aac8ff']} style = {{ marginRight:10, height:30, width:70, borderRadius:5, alignItems:'center', justifyContent:'center'}}>
                    <Text style = {{textAlign:'center', color:'#1f497d', fontWeight:'bold'}}>次へ</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
}