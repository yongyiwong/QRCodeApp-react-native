import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, } from "react-native";
import Header from "./include/Header";
import LinearGradient from 'react-native-linear-gradient';
export default class Test extends Component {
  render() {
console.warn( "Params---- " + this.props.route.params.itemId );    
    return (
      <View style={styles.container}>
            {/* <TouchableOpacity delayPressIn = {0} activeOpacity = {0.5}>
                <LinearGradient colors={['#e3edff', '#aac8ff']} style = {{ marginLeft:10, height:30, width:70, borderRadius:5, alignItems:'center', justifyContent:'center'}}>
                <Text style = {{textAlign:'center', color:'#1f497d'}}>Back</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity 
                delayPressIn = {0}
                activeOpacity = {0.5}
                onPress={() => {
                    this.props.navigation.navigate('QRScanner')
                }}
            >
                <LinearGradient colors={['#e3edff', '#aac8ff']} style = {{ marginRight:10, height:30, width:70, borderRadius:5, alignItems:'center', justifyContent:'center'}}>
                <Text style = {{textAlign:'center', color:'#1f497d'}}>Next</Text>
                </LinearGradient>
            </TouchableOpacity> */}
            <Header {...this.props }/>
        <View style={styles.item1}>
          <Text style={styles.text}>Item 1</Text>
        </View>
        <View style={styles.item2}>
          <Text style={styles.text}>Item 2</Text>
        </View>
        <View style={styles.item3}>
          <Text style={styles.text}>Item 3</Text>
        </View>
        <View style={styles.item4}>
          <Text style={styles.text}>Item 4</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor: "#fff"
  },
    text: {
    fontWeight: "bold",
    fontSize: 20
  },
  item1: {
    height:200,
    backgroundColor: "#feffcb"
  },
  item2: {
    flex: 1,
    backgroundColor: "#c6394d"
  },
  item3: {
    flex: 1,
    backgroundColor: "#49beb7"
  },
  item4: {
    flex: 1,
    backgroundColor: "#240041"
  }
});