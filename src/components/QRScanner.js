import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import Header from "./include/Header";


export default class QRScanner extends Component {
  onSuccess(e) {
console.warn( e.data );    
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }

  render() {
    const screenHeight = Math.round(Dimensions.get('window').height);    
    return (
      <View>
        <Header {...this.props}/>        
        <QRCodeScanner
          topViewStyle={{height: 0, flex: 0}}
          cameraStyle={[{height:screenHeight-40, marginTop:40}]}
          cameraProps={{captureAudio: false}}
          onRead={this.onSuccess.bind(this)}
          // topContent={
          //   <Text style={styles.centerText}>
          //     Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
          //   </Text>
          // }
          // bottomContent={
          //   <TouchableOpacity style={styles.buttonTouchable} onPress={() => {this.scanner.reactivate()}}>
          //     <Text style={styles.buttonText}>OK. Got it!</Text>
          //   </TouchableOpacity>
          // }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});