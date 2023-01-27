import {React, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackIcon from 'react-native-vector-icons/Feather';

const Input = props => {
  return (
    <View>
      <LabelText>{props.label}</LabelText>
      <InputBox>
        <BackIcon name={props.name} />
        <TextInput placeholder={props.placeholder} />
      </InputBox>
    </View>
  );
};

export default Input;
const LabelText = styled.Text`
  text-align: left;
  margin-left: 35%;
`;
const InputBox = styled.View`
  flex-direction: row;
  padding-left: 5px;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  border: solid 1px navy;
  width: 30%;
`;
