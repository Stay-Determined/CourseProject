import {React} from "react";
import {View, Text, Linking } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import {RNCamera} from "react-native-camera";

const Scanner = () => {
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };
  return(
    <View>
    
    <QRCodeScanner 
    onRead={this.onSuccess}
    
    topContent={
      <Text>Scannez un QR code</Text>
    }
    bottomContent={
      <Text>QR Scan</Text>
    }
    />
    </View>

  );
}

export default Scanner;