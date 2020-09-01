import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import BackBtn from "../navigator/BackBtn";
import NextBtn from "../navigator/NextBtn";

export default class Header extends Component{
    render(){
//console.log( this.props.route.params.itemId );
        return(
                <View style = {[styles.content]}>
                    <BackBtn navigation={this.props.navigation} id = {this.props.route.params.itemId}/>
                    <NextBtn navigation={this.props.navigation} id = {this.props.route.params.itemId}/>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'red',
    },
    content:{
        flexDirection:'row',
        height:60,
        backgroundColor:'#cccccc',
        alignItems:'center',
        justifyContent:'space-between',        
    },
  });