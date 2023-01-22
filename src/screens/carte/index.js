import {React, useRef, useState} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Modal,
  View,
  Alert,
} from 'react-native';
import styled from 'styled-components';
import {Timer, Countdown} from 'react-native-element-timer';

const Carte = ({navigation}) => {
  const timerRef = useRef(null);
  const countdownRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [btnVisible, setBtnVisible] = useState(false);

  return (
    <Block>
      <Title>Carte de la course</Title>
      <Txt>TIMER</Txt>
      <Timer
        ref={timerRef}
        onTimes={e => {}}
        onPause={e => {}}
        onEnd={e => {}}
      />

      <BtnCarte
        visible={btnVisible}
        onPress={() => {
          timerRef.current.start();
          setBtnVisible(!btnVisible);
          setModalVisible(true);
        }}>
        <Txt>Prêt?</Txt>
      </BtnCarte>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <BtnCarte onPress={() => navigation.navigate('QrGen')}>
          <Txt>Vers la génération de qr code</Txt>
        </BtnCarte>
        <BtnCarte onPress={() => navigation.navigate('Deconnexion')}>
          <Txt>Vers déconnexion</Txt>
        </BtnCarte>
      </Modal>
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
