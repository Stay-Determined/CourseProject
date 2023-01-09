import {React, useState} from 'react';
import {
  Text,
  SafeAreaView,
  Button,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackIcon from 'react-native-vector-icons/Feather';
import Input from '../../components/inputs';

const Connexion = ({navigation}) => {
  return (
    <Block>
      <Title>Daily Runs</Title>
      <Input name="at-sign" label="Mail" placeholder="Mail" />
      <Input name="key" label="Mot de passe" placeholder="Mot de passe" />

      <BtnNext onPress={() => navigation.navigate('MainPage')}>
        <Txt>
          Connexion
          <BackIcon name="chevron-right" />
        </Txt>
      </BtnNext>
    </Block>
  );
};

const Block = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  display: flex;
`;

const Title = styled.Text`
  font-size: 25;
  text-align: center;
  margin-bottom: 20px;
`;
const Txt = styled.Text`
  font-size: 15;
  color: white;
`;
const Data = styled.TextInput`
  width: 50%;
  border-radius: 10px;
  text-align: center;
  background-color: black;
  color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const BtnNext = styled.TouchableOpacity`
  width: 30%;
  padding: 10px 0px;
  background-color: grey;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  align-items: center;
  align-self: center;
`;

export default Connexion;
