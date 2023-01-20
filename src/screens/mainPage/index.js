import {React} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import styled from 'styled-components';
import BackIcon from 'react-native-vector-icons/Feather';

const MainPage = ({navigation}) => {
  return (
    <Block>
      <Title>Liste des courses</Title>
      <BtnCourse1 onPress={() => navigation.navigate('Carte')}>
        <Txt>
          Commencer la course 1
          <BackIcon name="arrow-right-circle" />
        </Txt>
      </BtnCourse1>
      <BtnCourse2 onPress={() => navigation.navigate('Carte')}>
        <Txt>
          Commencer la course 2
          <BackIcon name="arrow-right-circle" />
        </Txt>
      </BtnCourse2>
      <BtnCourse3 onPress={() => navigation.navigate('Carte')}>
        <Txt>
          Commencer la course 3
          <BackIcon name="arrow-right-circle" />
        </Txt>
      </BtnCourse3>
      <BtnCourse4 onPress={() => navigation.navigate('Carte')}>
        <Txt>
          Commencer la course 4
          <BackIcon name="arrow-right-circle" />
        </Txt>
      </BtnCourse4>
      <BtnCourse5 onPress={() => navigation.navigate('Carte')}>
        <Txt>
          Commencer la course 5
          <BackIcon name="arrow-right-circle" />
        </Txt>
      </BtnCourse5>
    </Block>
  );
};

const styles = StyleSheet.create({
  course1: {
    border: 'solid blue',
  },
  course2: {
    border: 'solid red',
  },
});

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
  color: black;
`;

const BtnCourse1 = styled.TouchableOpacity`
  width: 60%;
  padding: 10px 0px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  align-items: center;
  align-self: center;
  border: solid 2px green;
`;

const BtnCourse2 = styled.TouchableOpacity`
  width: 60%;
  padding: 10px 0px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  align-items: center;
  align-self: center;
  border: solid 2px red;
`;
const BtnCourse3 = styled.TouchableOpacity`
  width: 60%;
  padding: 10px 0px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  align-items: center;
  align-self: center;
  border: solid 2px purple;
`;
const BtnCourse4 = styled.TouchableOpacity`
  width: 60%;
  padding: 10px 0px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  align-items: center;
  align-self: center;
  border: solid 2px yellow;
`;
const BtnCourse5 = styled.TouchableOpacity`
  width: 60%;
  padding: 10px 0px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  align-items: center;
  align-self: center;
  border: solid 2px blue;
`;

export default MainPage;
