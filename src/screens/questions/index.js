<<<<<<< Updated upstream
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

=======
import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import RadioButtonRN from 'radio-buttons-react-native';

const Question = () =>{
  const data = [
    {
      label: 'data 1'
     },
     {
      label: 'data 2'
     },
     {
      label: 'data 3'
     },
     {
      label: 'data 4'
     }
    ];
  return(
    <Block>
        <Title>Question</Title>
        <Txt>Blablablablablablablablabla ?</Txt>
        <RadioButtonRN
          data={data}
          selectedBtn={(e) => console.log(e)}
        />

    </Block>
  );
};
>>>>>>> Stashed changes
const Block = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  display: flex;
<<<<<<< Updated upstream
  text-align: center;
`;
=======
  margin-right: auto;
  margin-left: auto;
`;

const Title = styled.Text`
  font-size: 25;
  text-align: center;
`;
const Txt = styled.Text`
  font-size: 15;
  color: black;
`;

const BtnQst = styled.TouchableOpacity`
  width: 30%;
  padding: 10px 0px;
  background-color: black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  align-items: center;
  align-self: center;
`;
export default Question;
>>>>>>> Stashed changes
