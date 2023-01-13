import {React} from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const Carte = ({navigation}) => {
  return (
    <Block>
      <Title>Carte de la course</Title>
      <BtnCarte onPress={() => navigation.navigate('Deconnexion')}>
        <Txt>Vers déconnexion</Txt>
      </BtnCarte>
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
`;
const Txt = styled.Text`
  font-size: 15;
  color: white;
`;

const BtnCarte = styled.TouchableOpacity`
  width: 35%;
  padding: 10px 0px;
  background-color: black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  align-items: center;
  align-self: center;
`;
export default Carte;
