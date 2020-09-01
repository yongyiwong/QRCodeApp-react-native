import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Image, ScrollView, View, Text, TextInput, TouchableOpacity, Platform, TouchableWithoutFeedback } from "react-native";
import Header from "./include/Header";
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import LinearGradient from 'react-native-linear-gradient';
import { Chevron } from 'react-native-shapes';
import DateTimePicker from '@react-native-community/datetimepicker';

import * as Global from '../modules/global';

var commonCss = require('../styles/common');
const sports = [
    {
      label: 'その他（選択する）',
      value: 'その他（選択する）',
    },
    {
      label: 'その他（選択する）',
      value: 'その他（選択する）',
    },
    {
      label: 'その他',
      value: 'その他',
    },
  ];
const placeholder = {
    label: 'その他（選択する）',
    value: null,
    color: '#375c8a',
};

  
export default class SecondScreen extends Component{

    constructor(props) {
      super(props);
  
      this.inputRefs = {
        firstTextInput: null,
        favSport0: null,
        favSport1: null,
        lastTextInput: null,
        favSport5: null,
      };
  
      this.state = {
        numbers: [
          {
            label: '1',
            value: 1,
            color: 'orange',
          },
          {
            label: '2',
            value: 2,
            color: 'green',
          },
        ],
        favSport0: undefined,
        favSport1: undefined,
        favSport2: undefined,
        favSport3: undefined,
        favSport4: 'baseball',
        previousFavSport5: undefined,
        favSport5: null,
        favNumber: undefined,
        date:new Date(1598051730000),
        mode:'date',
        show:false,

      };
  
      this.InputAccessoryView = this.InputAccessoryView.bind(this);
    }
    
    InputAccessoryView() {
      return (
        <View style={defaultStyles.modalViewMiddle}>
          <TouchableWithoutFeedback
            onPress={() => {
              this.setState(
                {
                  favSport5: this.state.previousFavSport5,
                },
                () => {
                  this.inputRefs.favSport5.togglePicker(true);
                }
              );
            }}
            hitSlop={{ top: 4, right: 4, bottom: 4, left: 4 }}>
            <View testID="needed_for_touchable">
              <Text
                style={[
                  defaultStyles.done,
                  { fontWeight: 'normal', color: 'red' },
                ]}>
                キャンセル
              </Text>
            </View>
          </TouchableWithoutFeedback>
          {/* <Text>Name | Prefer</Text> */}
          <TouchableWithoutFeedback
            onPress={() => {
              this.inputRefs.favSport5.togglePicker(true);
            }}
            hitSlop={{ top: 4, right: 4, bottom: 4, left: 4 }}>
            <View testID="needed_for_touchable">
              <Text style={defaultStyles.done}>完了</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      );
    }
    onChange = (event, selectedDate) => {
      const currentDate = selectedDate || this.state.date;
      this.setState({
        show:Platform.OS === 'ios'?true:false,
        date:currentDate,
      });
    };
  
    showMode = (currentMode) => {
      this.setState({
        show:true,
        mode:currentMode,
      });
    };
  
    showDatepicker = () => {
      this.showMode('date');
    };
  
    showTimepicker = () => {
      this.showMode('time');
    };    
    render(){
        return(
            <SafeAreaView style = {[styles.container]}>
                <Header  {...this.props }/>
                <ScrollView>
                    <Image
                        source={require('../assets/images/step_1.png')} style={styles.step_img}/>
                    <Text style = {{marginTop:30, marginBottom:10, textAlign:'center', color:'black', fontSize:25, fontWeight:'bold' }}>情報元（情報項目）{'\n'}情報登録者{'\n'}日付を選択してください</Text>
                    <View style={styles.row}>
                        <TouchableOpacity
                            delayPressIn = {0}
                            activeOpacity = {0.5}
                            style = {[styles.cell, commonCss.shadow1,{marginRight:5}]}>
                            <LinearGradient colors={['#e1ebff', '#adcbff']} style = {[styles.cell_inner]}>
                                <Text style={styles.txt}>顧客情報</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            delayPressIn = {0}
                            activeOpacity = {0.5}
                            style = {[styles.cell, commonCss.shadow1, {marginLeft:5}]}>
                            <LinearGradient colors={['#e1ebff', '#adcbff']} style = {[styles.cell_inner]}>
                                <Text style={styles.txt}>営業情報</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                            delayPressIn = {0}
                            activeOpacity = {0.5}
                            style = {[styles.cell, commonCss.shadow1,{marginRight:5}]}>
                            <LinearGradient colors={['#e1ebff', '#adcbff']} style = {[styles.cell_inner]}>
                                <Text style={styles.txt}>社内情報</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            delayPressIn = {0}
                            activeOpacity = {0.5}
                            style = {[styles.cell, commonCss.shadow1, {marginLeft:5}]}>
                            <LinearGradient colors={['#e1ebff', '#adcbff']} style = {[styles.cell_inner]}>
                                <Text style={styles.txt_small}>※※後で名称を変{'\n'}えたいです。</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style = {[styles.cell_txt]}>
                        <Text style = {[styles.label]}>業務コード</Text>
                        <TextInput 
                            editable
                            style = {[styles.text_field]}/>
                    </View>
                    <View style={styles.row}>
                      <View
                        style = {[styles.cell, commonCss.shadow1,{ flex:1}]}
                      >
                        <LinearGradient colors={['#e1ebff', '#adcbff']} style = {[styles.cell_inner]}>
                          <RNPickerSelect
                            items={sports}
                            value={this.state.favSport5}
                            onValueChange={value => {
                            this.setState({
                                favSport5: value,
                            });
                            }}
                            onOpen={() => {
                            this.setState({
                                previousFavSport5: this.state.favSport5,
                            });
                            }}
                            InputAccessoryView={this.InputAccessoryView}
                            ref={ref => {
                            this.inputRefs.favSport5 = ref;
                            }}
                            style={{
                              ...pickerSelectStyles,
                              iconContainer: {
                                top: 12,
                                right: 20,
                              },
                              placeholder:{
                                color:'#375c8a',
                                fontSize:25,
                                fontWeight:'bold',
                              }
                            }}
                            placeholder ={placeholder}
                            Icon={() => {
                              return <Chevron size={2.5} color="#385d8a"/>;
                            }}
                            useNativeAndroidPickerStyle={false} 
                        />
                        </LinearGradient>
                      </View>
                    </View>
                    <View style={styles.row}>
                      <TouchableOpacity
                        style = {[styles.cell, commonCss.shadow1,{ flex:1}]}
                        onPress={this.showDatepicker}
                      >
                        <LinearGradient colors={['#e1ebff', '#adcbff']} style = {[styles.cell_inner]}>
                            <Text style={styles.txt}>カレンダー（選択する）</Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>                    
                    <TouchableOpacity
                        delayPressIn = {0}
                        activeOpacity = {0.5}
                        style = {[styles.read_btn, styles.shadow1]}>
                        <LinearGradient colors={['#e1ebff', '#adcbff']} style = {[styles.read_inner]}>
                            <Text style = {{textAlign:'center', color:'#184377', fontSize:25, fontWeight:'bold' }}>次へ</Text>
                        </LinearGradient>
                    </TouchableOpacity>                    
                </ScrollView>
                { this.state.show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={this.state.date}
                    mode={this.state.mode}
                    is24Hour={true}
                    display="default"
                    onChange={this.onChange}
                    />
                )}                  
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
    row:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:25,
        marginRight:25,
        marginTop:20,
    },
    cell:{
        flex:0.5,
        height:45,
        alignItems:'stretch',
        justifyContent:'center',
        borderRadius:5,
        backgroundColor:'#4a7ebb',
        borderWidth:1,
        borderColor:'#4a7ebb',
    },
    cell_inner:{
        flex:1,
        justifyContent:'center',
        padding:1,
        borderRadius:5,
    },
    txt:{
        textAlign:'center',
        color:'#184377',
        fontSize:25,
        fontWeight:'bold'
    },
    txt_small:{
        textAlign:'center',
        color:'#184377',
        fontSize:15,
    },
    cell_txt:{
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    fontWeight:"bold",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 0,
    borderColor: 'gray',
    borderRadius: 4,
    color: '#385d8a',
    textAlign: 'center',    
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 20,
    fontWeight:"bold",    
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderWidth: 0,
    borderRadius: 8,
    color: '#385d8a',
    textAlign: 'center', 
    paddingRight: 0, // to ensure the text is never behind the icon
  },
});