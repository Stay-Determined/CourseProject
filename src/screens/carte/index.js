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
<<<<<<< Updated upstream
      <Txt>TIMER</Txt>
=======
      <Fond>
      <Txt2>TIMER</Txt2>
>>>>>>> Stashed changes
      <Timer
        ref={timerRef}
        onTimes={e => {}}
        onPause={e => {}}
        onEnd={e => {}}
      />
<<<<<<< Updated upstream

=======
  </Fond>
>>>>>>> Stashed changes
      <BtnCarte
        visible={btnVisible}
        onPress={() => {
          timerRef.current.start();
<<<<<<< Updated upstream
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
=======
        }}>
        <Txt>Prêt?</Txt>
      </BtnCarte>
      <BtnCarte
        visible={btnVisible}
        onPress={() => {
          timerRef.current.resume();
        }}>
        <Txt>Resume</Txt>
      </BtnCarte>
      
>>>>>>> Stashed changes
    </Block>
  );
};

const Block = styled.SafeAreaView`
  flex: 1;
<<<<<<< Updated upstream
  justify-content: center;
  display: flex;
=======
  text-align: center;
  justify-content: center;
  align-item: center;
  display: flex;
  
>>>>>>> Stashed changes
`;

const Title = styled.Text`
  font-size: 25;
  text-align: center;
`;
const Txt = styled.Text`
  font-size: 15;
  color: white;
`;
const Txt2 = styled.Text`
  font-size: 15;
  color: black;
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

const Fond = styled.View`

margin-left: auto;
margin-right: auto;
text-align: center;
align-content: center;
`;

export default Carte;
