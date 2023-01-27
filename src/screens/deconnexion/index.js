import {React} from 'react';
import {View, Button} from 'react-native';
import styled from 'styled-components';

const Deconnexion = ({navigation}) => {
  return (
    <View>
      <Title>Déconnectez-vous de votre compte</Title>
      <BtnDeco onPress={() => navigation.navigate('Connexion')}>
        <Txt>Déconnexion</Txt>
      </BtnDeco>
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

const BtnDeco = styled.TouchableOpacity`
  width: 30%;
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

export default Deconnexion;
