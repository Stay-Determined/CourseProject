import {React} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const MainPage = ({navigation}) => {
  return (
    <View>
      <Title>Liste des courses</Title>
      <BtnCourse onPress={() => navigation.navigate('Carte')}>
        <Txt>Commencer la course 1</Txt>
      </BtnCourse>
      <BtnCourse onPress={() => navigation.navigate('Carte')}>
        <Txt>Commencer la course 2</Txt>
      </BtnCourse>
      <BtnCourse onPress={() => navigation.navigate('Carte')}>
        <Txt>Commencer la course 3</Txt>
      </BtnCourse>
      <BtnCourse onPress={() => navigation.navigate('Carte')}>
        <Txt>Commencer la course 4</Txt>
      </BtnCourse>
      <BtnCourse onPress={() => navigation.navigate('Carte')}>
        <Txt>Commencer la course 5</Txt>
      </BtnCourse>
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

const BtnCourse = styled.TouchableOpacity`
  width: 60%;
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
export default MainPage;
