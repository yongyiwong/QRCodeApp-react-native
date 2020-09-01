import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Image, ScrollView, View, Text, TextInput, TouchableOpacity, } from "react-native";
import Header from "./include/Header";
import LinearGradient from 'react-native-linear-gradient';
import * as Global from '../modules/global';

var commonCss = require('../styles/common');
export default class FirstScreen extends Component{
    render(){
        return(
            <SafeAreaView style = {[styles.container]}>
                <Header {...this.props }/>
                <ScrollView>
                    <Image
                        source={require('../assets/images/step_1.png')} style={styles.step_img}/>
                    <TouchableOpacity
                        delayPressIn = {0}
                        activeOpacity = {0.5}
                        style = {[styles.scan_btn_container, styles.shadow1]}>
                        <LinearGradient colors={['#e1ebff', '#adcbff']} style = {[styles.scan_inner]}>
                            <Text style = {{textAlign:'center', color:'#184377', fontSize:20, fontWeight:'bold' }}>QRコードスキャナーを {'\n'}起動する</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <Text style = {{marginTop:30, textAlign:'center', color:'black', fontSize:25, fontWeight:'bold' }}>または直接企業コードと{'\n'}社名を入力する</Text>
                    <View style = {[styles.cell]}>
                        <Text style = {[styles.label]}>企業コード</Text>
                        <TextInput 
                            editable
                            style = {[styles.text_field]}/>
                    </View>
                    <View style = {[styles.cell]}>
                        <Text style = {[styles.label]}>企業名</Text>
                        <TextInput 
                            editable
                            style = {[styles.text_field]}/>
                    </View>
                    <TouchableOpacity
                        delayPressIn = {0}
                        activeOpacity = {0.5}
                        style = {[styles.read_btn, styles.shadow1]}>
                        <LinearGradient colors={['#e1ebff', '#adcbff']} style = {[styles.read_inner]}>
                            <Text style = {{textAlign:'center', color:'#184377', fontSize:25, fontWeight:'bold' }}>読込</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'stretch',
        justifyContent:'flex-start',
    },
    step_img:{
        width:'99%',
        justifyContent:'center',
        resizeMode:'contain',
    },
    scan_btn_container:{
        width:'85%',
        height:70,
        alignSelf:'center',
        alignItems:'stretch',
        justifyContent:'center',
        marginTop:35,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#6f9bd4',
        backgroundColor:'#6f9bd4',
    },
    shadow1: Global.elevationShadowStyle(5),    
    scan_inner:{
        flex:1,
        justifyContent:'center',
        padding:1,
        borderRadius:10,
    },
    cell:{
        marginLeft:40,
        marginRight:40,
        marginTop:30,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    label:{
        textAlign:'left',
        flex:100,
        fontSize:20,
        fontWeight:'bold',
    },
    text_field:{
        alignSelf:'flex-start',
        flex:135,
        height:35,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#477cba',
    },
    read_btn:{
        width:115,
        height:55,
        alignSelf:'flex-end',
        alignItems:'stretch',
        justifyContent:'center',
        marginTop:35,
        marginRight:40,
        marginBottom:10,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#6f9bd4',
        backgroundColor:'#6f9bd4',
    },
    read_inner:{
        flex:1,
        justifyContent:'center',
        padding:1,
        borderRadius:5,
    },

  });