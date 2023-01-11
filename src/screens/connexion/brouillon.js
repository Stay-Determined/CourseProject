import {React} from 'react';
import {Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const Connexion = ({navigation}) => {
  return (
    <View>
      <Title>Connectez-vous</Title>
      <Data value="Identifiant" />
      <Data value="Mot de passe" />
      <BtnNext onPress={() => navigation.navigate('MainPage')}>
        <Txt>Connexion</Txt>
      </BtnNext>
    </View>
  );
};

const Title = styled.Text`
  font-size: 25;
  text-align: center;
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
  width: 25%;
  padding: 10px 0px;
  border-radius: 20px;
  background-color: grey;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  align-items: center;
  align-self: center;
`;

export default Connexion;
