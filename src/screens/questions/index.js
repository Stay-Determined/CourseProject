import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styled from 'styled-components';

import QRCode from 'react-native-qrcode-svg';

const QrGen = () => {
  const [inputText, setInputText] = useState('');
  const [qrvalue, setQrvalue] = useState('');
  return (
    <Block>
      <ScrollView>
        <QRCode
          value={qrvalue ? qrvalue : 'Outil'}
          size={250}
          color="green"
          backgroundColor="white"
        />
        <QRCode
          value={qrvalue ? qrvalue : 'Google'}
          size={250}
          color="red"
          backgroundColor="white"
        />
        <QRCode
          value={qrvalue ? qrvalue : 'Wikipédia'}
          size={250}
          color="purple"
          backgroundColor="white"
        />
        <QRCode
          value={qrvalue ? qrvalue : 'Qwant'}
          size={250}
          color="yellow"
          backgroundColor="white"
        />
        <QRCode
          value={qrvalue ? qrvalue : 'Visual Studio'}
          size={250}
          color="blue"
          backgroundColor="white"
        />
        <TouchableOpacity onPress={() => setQrvalue(inputText)}>
          <Text>Generate QR Code</Text>
        </TouchableOpacity>
      </ScrollView>
    </Block>
  );
};

export default QrGen;

const Block = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  display: flex;
  text-align: center;
`;
